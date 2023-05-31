import React, { useContext } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { cart } = useContext(AppContext);
  return (
    <>
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
              right: "380px",
              color: "red",
              fontSize: "28px",
            }}
          >
            Shopping cart
          </h1>
        </NavLink>
        <div className="links" style={{ marginRight: "5%" }}>
          <NavLink
            to={"/sale"}
            className={({ isActive }) =>
              isActive ? "activeStyless" : "classicStyless"
            }
          >
            <h3>On Sale</h3>
          </NavLink>
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
      {cart.length > 0 && <h5 className="cartLength">{cart.length}</h5>}
    </>
  );
};

export { Navbar };
