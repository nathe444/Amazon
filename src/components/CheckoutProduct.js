  import React from "react";
  import './Css/CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
 

  function CheckoutProduct(props){

    const[{basket},setBasket]=useStateValue();

    const removeFromBasket= () => {
      // dispatch the item into the data layer
      setBasket({
        type:"REMOVE_FROM_BASKET",
        item:{
          id:props.id
        }
      })
    }

    return(
      <div>
      
        <div className="checkout-item">
            <img src={props.image} className="checkout-image"/>

          <div className="checkout-right">
            <h4 className="checkout-details">
            {props.details}
            </h4>

            <h4 className="checkout-price">$
            {props.price}
            </h4>

            <div className="checkout-rating">
            {Array(props.ratings).fill().map(()=><p>🌟</p> )}
            </div>

            <button className="checkout-product-btn" onClick={removeFromBasket}>Remove from Basket</button>

          </div>
        
        </div>
    </div>
    )
  }


  export default CheckoutProduct;