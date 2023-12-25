import React, { useEffect } from "react";
import "./Css/Payment.css";
import { useState  } from "react";
import { useStateValue } from "./StateProvider";
import { Await, Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";

function Payment() {

  

  const navigate=useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [{ basket, amount, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate client secret

   
    const getClientSecret =  async() => {

      try{
        const response = await axios({
          method: "post",
          // stripe calculates money with currencies subunit
          url: `payments/create/${getBasketTotal(basket) * 100}`,
        });
        setClientSecret(response.data.clientSecret);

      } catch(error){
        console.error('error occurred :',error)
      }

    };
     getClientSecret();
  }, [basket]);

  console.log('secret is '+ clientSecret)

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      } //destructuring the response
    }).then(({paymentIntent})=>{
      //payemntIntent=payment confirmation

      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket:basket,
          amount:paymentIntent.amount,
          created:paymentIntent.created
        })


      setSucceeded(true);
      setError(null);
      setProcessing(false);


      dispatch({
        type:'EMPTY_BASKET'
      })

      navigate('/orders',{replace:true});
    })
  };

  const handleChange=(event)=>{
    setDisabled(event.empty);
    setError(event.error ? event.error.message:'')
  }

  return (
    <div>
      <div className="payment">
        <h1 className="payment-checkout-count">
          Checkout(
          <Link to={"/checkout"} style={{ color: "#551A8B" }}>
            {amount} Items
          </Link>
          )
        </h1>
      </div>

      <hr />

      <div className="address-container">
        <h2>Delivery Address</h2>
        <div className="address-details-container">
          <p>{user ? user?.email : ""}</p>
          <p>123 React Lane</p>
          <p>Chicago, IL</p>
        </div>
      </div>

      <hr className="hrr" />

      <div className="payment-review-container">
        <h2>Review items and delivery</h2>
        <div>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                id={item.id}
                details={item.details}
                price={item.price}
                ratings={item.ratings}
                image={item.image}
              />
            );
          })}
        </div>
      </div>

      <hr className="hrr" />

      <div className="payment-method-container">
        <h2>Payment Method</h2>

        <div className="payment-details">
          <form action="" onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <h2>
              Order Total :
              <CurrencyFormat
                renderText={(value) => (
                  <div style={{ display: "inline-block" }}>{value}</div>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </h2>
            <button disabled={processing || disabled || succeeded}>
              {processing ? "Processing" : "Buy Now"}
            </button>

            {error && <div>{error}</div>}
          </form>
        </div>
      </div>

      <hr className="hrr" />
    </div>
  );
}

export default Payment;
