import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink to="/">
        <img src={require("../../assets/images/logo.png")}></img>;
      </NavLink>
      <div className="links">
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h3 style={{ color: "white" }}>Products</h3>
        </NavLink>
        <NavLink to={"/cart"}>
          <h3 style={{ color: "white" }}>Cart</h3>
        </NavLink>
      </div>
    </header>
  );
};

export { Navbar };
