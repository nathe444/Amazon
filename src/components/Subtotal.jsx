import React from "react";
import './Css/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";


function Subtotal(){

  const [{basket,amount},dispatch]=useStateValue();

  console.log(basket);

 const getBasketTotal =(basket) =>
   basket.reduce((amount,item) => item.price + amount, 0);
 
  return(
    <div className="right">

    <CurrencyFormat
      renderText={(value)=>(
        <div>
          <p className="p">Subtotal ({amount} items):{value}</p>

          <input type="checkbox" />
        
          <p className="checkbox-text"> This order contains a gift</p>

        </div>
      )}

      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator={true}
      prefix={"$"}
    
    />

    <button className="checkout-btn">Proceed to Checkout</button>
   
  </div>
  )
}

export default Subtotal;