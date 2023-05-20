import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <div style={{ marginLeft: "5%" }}>
        <NavLink to="/">
          <img
            src={require("../../assets/images/istockphoto-1162434913-170667a-removebg-preview.png")}
            alt="logo"
          ></img>
          ;
        </NavLink>
      </div>
      <div className="links" style={{ marginRight: "5%" }}>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h3 style={{ color: "white" }}>Products</h3>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h3 style={{ color: "white" }}>Cart</h3>
        </NavLink>
      </div>
    </header>
  );
};

export { Navbar };
