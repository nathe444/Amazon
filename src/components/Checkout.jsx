import React from "react";
import './Css/Checkout.css'
import Subtotal from './Subtotal';
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";

function Checkout(){

  const [{basket ,user},dispatch]=useStateValue();


  return(
    <div className="checkout">

     <div className="main-container-checkout">
        <div className="left">
          <img src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' className="img"/>

          <h3 className="greet-text">Hello,</h3>

          <h4 style={{fontFamily:'Arial',marginTop:10,marginLeft:5}}>{user?.email}</h4>

          <h2 className="basket-text">Your shopping Basket</h2>
               <hr></hr>
       </div>
      <Subtotal />
     </div>


        {basket.map((item) =>{
          return(
            <CheckoutProduct
             id={item.id}
             details={item.details}
             price={item.price}
             ratings={item.ratings}
             image={item.image}
             />
          )
        })}
       
      
    </div>
    
  )
}

export default Checkout;