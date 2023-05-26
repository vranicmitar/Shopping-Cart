import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  return (
    <div>
      <img
        src={require("../../assets/images/icons8-buy-100.png")}
        style={{ width: "180px", marginLeft: "40%", marginTop: "5%" }}
        alt="cart"
      ></img>
      <section style={{ marginLeft: "35%", marginTop: "2%" }}>
        <h2 style={{ color: "red", fontSize: "30px" }}>
          Your Shopping Cart is Empty
        </h2>
        <br></br>
        <Link to="/products">
          <button className="button-89">Start shopping</button>
        </Link>
      </section>
    </div>
  );
};

export default Cart;
