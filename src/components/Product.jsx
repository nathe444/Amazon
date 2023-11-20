import React, { useContext } from "react";
import './Css/product.css'
import { useStateValue } from "./StateProvider";

function Product(props){

  const [state,setBasket]=useStateValue();

  // console.log(basket) 

  const addToBasket= () => {
    // dispatch the item into the data layer
    setBasket({
      type:"ADD_TO_BASKET",
      item:{
        id:props.id,
        details:props.details,
        image:props.image,
        price:props.price,
        ratings:props.ratings
      }
    })
  }
   

  return(
    <div className="product">
      <div className="product-info">
        <p className="details-text">
          {props.details}</p>
      
        <p className="product-price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>     

        <div className="product-rating">
          {Array(props.ratings).fill().map(()=><p>🌟</p> )}
        </div>
            
      </div>
  
      
      <img src={props.image} className="product-image"/>

      <button className="product-btn" onClick={addToBasket}>Add to Basket</button>
      
    </div>
  )
}

export default Product;