import react, { useState } from "react";
import moment from "moment/moment";
import CheckoutProduct from "./CheckoutProduct";
import "./Css/Order.css";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  const [isOrder, setIsOrder] = useState(true);

  return (
    <div className="order">
      {/* <h2>Order</h2> */}
      <p>
        {" "}
        <span style={{ color: "black", fontWeight: "bold" }}>Date:</span>{" "}
        {moment.unix(order.data.created).format("MMM Do YYY, h:mma")}
      </p>

      {/* <p className='order-id'>
        <small style={{display:'flex', alignItems:'center'}}> <span style={{color:'black',fontWeight:'bold'}}>Id :</span> {order.id}</small> </p> */}

      <div className="orders-product-details">
        {order.data.basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            details={item.details}
            price={item.price}
            ratings={item.ratings}
            image={item.image}
            isOrder={isOrder}
          />
        ))}

        <CurrencyFormat
          renderText={(value) => (
            <div
              style={{
                display: "inline-block",
                marginLeft: 20,
                marginTop: 70,
                marginBottom: 30,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              {" "}
              <span style={{ fontSize: 25, color: "black",marginLeft:230  }}>
                Order Total
              </span>: {value}
            </div>
          )}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
}

export default Order;
