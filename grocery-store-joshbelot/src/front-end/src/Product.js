import axios from 'axios';
  

function Product(props) {
      const addToCart = async(id) => {
        try {
          await axios.post("/api/cart/" + id);
          props.fetchCart()
        } catch(error) {
          props.setError("error adding a task: " + error);
        }
      }
  return (<div key={props.product.id} className="item">
            <p>{props.product.name}, {props.product.price}</p>
            <button onClick={e => addToCart(props.product.id)}>Add to cart</button>
          </div>);
}

export default Product;