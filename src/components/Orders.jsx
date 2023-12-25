import React, { useEffect, useState } from "react";
import "./Css/Orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
 

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  console.log(orders)
  console.log (typeof orders[0])

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>

      <div className="orders-container">
        {orders?.map(order => (
          <Order order={order}/>
        ))}
      </div>

    </div>
  );
}

export default Orders;
