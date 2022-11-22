const crypto = require("node:crypto")
const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));

let products = [];


app.get('/api/products', (req, res) => {
  console.log("Getting all products");
  res.send(products);
});

app.get('/api/products/:id', (req, res) => {

  console.log("Getting product by ID");
  let ident = req.params.id;
  console.log(ident)
  let obj = products.find(obj => obj.id === ident);
  console.log(obj)
  res.send(obj);
});

app.post('/api/products', (req, res) => {
  console.log("Posting new product");
  const id = crypto.randomUUID();
  let product = {
    id: id,
    name: req.body.name,
    price: req.body.price
  };
  products.push(product);
  res.send(product);
});

app.delete('/api/products/:id', (req, res) => {
  console.log("Deleting product by id");
  let id = req.params.id;
  let removeIndex = products.map(product => {
    return product.id;
    })
    .indexOf(id);
  if (removeIndex === -1) {
    res.status(404)
      .send("Sorry, that product doesn't exist");
    return;
  }
  products = products.filter(obj => obj.id !== id);
  res.sendStatus(200);

});

//Cart handling

let cart = [];

app.get('/api/cart', (req, res) => {
  console.log("Getting the cart");
  res.send(cart);
});

app.post('/api/cart/:id', (req, res) => {
  console.log("Posting new item");
  let id = req.params.id;
  let index = cart.map(item => {
    return item.id;
    })
    .indexOf(id);
    let item = {
        id: id,
        quantity: 1,
      };
  if (index === -1) {
      cart.push(item);
      res.send(item);
      return;
  }
  
  cart[index].quantity += 1;

  res.send(cart[index]);

});


app.put('/api/cart/:id/:quantity', (req, res) => {
  console.log("Editing cart");
  let id = req.params.id;

  let quantity = parseInt(req.params.quantity);
  let index = cart.map(item => {
    return item.id;
    })
    .indexOf(id);
  if (index === -1) {
    res.status(404)
      .send("Sorry, that item doesn't exist");
    return;
  }

  cart[index].quantity = quantity;
  
  let tempObj = cart[index];

  if (quantity === 0){
      cart = cart.filter(obj => obj.id !== id);
  }
  
  res.send(tempObj);
});



app.delete('/api/cart/:id', (req, res) => {
  console.log("Editing cart");
  let id = req.params.id;
  let index = cart.map(item => {
    return item.id;
    })
    .indexOf(id);
  if (index === -1) {
    res.status(404)
      .send("Sorry, that item doesn't exist");
    return;
  }
  
    cart = cart.filter(obj => obj.id !== id);
  
  res.sendStatus(200);
});



app.listen(3000, () => console.log('Server listening on port 3000!'));