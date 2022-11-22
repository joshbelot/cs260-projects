import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Product from "./Product.js"
import Cart from "./Cart.js"
import Error from "./Error.js"

function App() {
  // setup state
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  //const [item, setItem] = useState("");




  const fetchProducts = async() => {
    try {      
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch(error) {
      setError("error retrieving products: " + error);
    }
  }
  
  const fetchCart = async() => {
    try {
      
      const response = await axios.get("/api/cart");
      const cart = response.data;
      
      for (let i = 0; i < cart.length; i++){
        const response = await findProduct(cart[i].id)
        console.log("FINDING")
        console.log(response)
        cart[i].name = response.name
      }
    
      setCartItems(cart)

    } catch(error) {
      setError("error retrieving cart: " + error);
    }
  }
  
  const findProduct = async(id) => {
    try {
      
      const response = await axios.get("/api/products/" + id);

      //setItem(response.data)
      return response.data
    } catch(error) {
      setError("error finding the product: " + error);
    }
  }

  

  // fetch product data
  useEffect(() => {
    fetchProducts();
  },[]);
  
    // fetch cart data
  useEffect(() => {
    fetchCart();
  },[]);
  
  console.log(cartItems)
  return (
    <div className="App">
      <div className="product">
        {Error(error)}
        <h1>Products</h1>
          {products.map( product => (
            <Product product={product} setError={setError} fetchCart={fetchCart} />
          ))} 
      </div>
      <div className="cart">
        {Error(error)}
        <h1>Cart</h1>
          {cartItems.map(cart => {
            return (<Cart cart={cart} setError={setError} fetchCart={fetchCart} />);
          })} 
      </div>
      <div>
        <a href = "https://github.com/BYU-CS-260/grocery-store-joshbelot">GITHUB LINK</a>
      </div>

    </div>
  );

}

export default App;

