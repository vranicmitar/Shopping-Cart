import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { AppContext } from "../../context/AppContext";

const Cart = () => {
  const { cart } = useContext(AppContext);
  return (
    <div>
      <img
        src={require("../../assets/images/icons8-buy-100.png")}
        style={{ width: "180px", marginLeft: "40%", marginTop: "5%" }}
        alt="cart"
      ></img>
      <section style={{ marginLeft: "35%", marginTop: "2%" }}>
        <h2 style={{ color: "black", fontSize: "30px" }}>
          Your Shopping Cart is Empty
        </h2>
        <br></br>
        <Link to="/products">
          <button className="button-89">
            <h3>Start shopping</h3>
          </button>
        </Link>
      </section>
      <h5
        style={{ position: "relative", bottom: "510px", left: "92.5%" }}
        className="numberOfProducts"
      >
        {cart.length}
      </h5>
    </div>
  );
};

export default Cart;
