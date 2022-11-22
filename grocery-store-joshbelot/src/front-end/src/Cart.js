import axios from 'axios';


  

function Cart(props) {
      const deleteFromCart = async(id) => {
        try {
          await axios.delete("/api/cart/" + id);
          props.fetchCart();
        } catch(error) {
          props.setError("error adding a task: " + error);
        }
      }
      
      const updateQuantity = async(id, quantity) => {
        try {
          await axios.put("/api/cart/" + id + "/" + quantity.toString());
          props.fetchCart()
        } catch(error) {
          props.setError("error adding a task: " + error);
        }
      }
      


      console.log(props)
  return (<div key={props.cart.id} className="item">
            
              <p>{props.cart.name}, {props.cart.quantity}
              <button onClick={e => updateQuantity(props.cart.id, (props.cart.quantity - 1))}>-</button>
              <button onClick={e => updateQuantity(props.cart.id, (props.cart.quantity + 1))}>+</button>
              <button onClick={e => deleteFromCart(props.cart.id)}>Remove from cart</button>
              </p>
              
          </div>);
}

export default Cart;