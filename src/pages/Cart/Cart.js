import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { AppContext } from "../../context/AppContext";
import CartCards from "../../components/CartCrads/CartCards";

const Cart = () => {
  const { cart } = useContext(AppContext);
  return (
    <>
      {cart.length !== 0 ? (
        <div className="cartCards">
          {/* <p>producstii</p> */}
          <h1 style={{ textAlign: "center", borderBottom: "1px solid green" }}>
            YOUR BAG
          </h1>
          {cart.map((product) => (
            <CartCards
              key={product.id}
              id={product.id}
              productImage={product.imageURL}
              productName={product.title}
              productPrice={product.price}
              quantity={product.quantityInCart}
            />
          ))}
        </div>
      ) : (
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
        </div>
      )}
    </>
  );
};

export default Cart;
