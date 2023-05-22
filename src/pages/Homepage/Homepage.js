import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="main" style={{ backgroundColor: "wheat" }}>
      <img
        src={require("../../assets/images/grocery-shopping-removebg-preview (1).png")}
        style={{ width: "70%", height: "50%" }}
      ></img>
      <button
        style={{
          width: "500px",
          height: "50px",
          position: "relative",
          bottom: "350px",
          left: "60%",
        }}
        className="dugme"
      >
        SEE OUR PRODUCTS
      </button>
    </div>
  );
}
