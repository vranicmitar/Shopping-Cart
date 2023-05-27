import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";

const Navbar = () => {
  return (
    <header className="navbar">
      <div style={{ marginLeft: "5%" }}>
        <NavLink to="/">
          <img
            src={require("../../assets/images/istockphoto-1162434913-170667a-removebg-preview.png")}
            alt="logo"
          ></img>
        </NavLink>
      </div>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <h1
          style={{
            position: "relative",
            right: "430px",
            color: "red",
            fontSize: "28px",
          }}
        >
          Shopping cart
        </h1>
      </NavLink>
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
          <h3 style={{ color: "white" }}>
            <ShoppingBagTwoToneIcon sx={{ fontSize: "30px" }} />
          </h3>
        </NavLink>
      </div>
    </header>
  );
};

export { Navbar };
