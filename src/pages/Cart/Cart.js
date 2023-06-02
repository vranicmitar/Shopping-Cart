import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import { AppContext } from "../../context/AppContext";
import CartCards from "../../components/CartCrads/CartCards";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { LocalShipping, Store } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 650,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 5,
};
const Cart = () => {
  const { products, cart } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const totalPrice = cart.reduce((prev, curr) => {
    const product = products.find((p) => p.id === curr.id);
    if (product.quantity > 20) {
      return (
        prev +
        (curr.price - (curr.price * curr.discountPercentage) / 100) *
          curr.quantityInCart
      );
    } else {
      return prev + curr.price * curr.quantityInCart;
    }
  }, 0);

  return (
    <>
      {cart.length !== 0 ? (
        <div className="cartCards">
          {/* <p>producstii</p> */}
          <h1 style={{ position: "absolute", top: 150, left: 100 }}>
            YOUR BAG
          </h1>
          <h3 style={{ position: "absolute", top: 200, left: 100 }}>
            Total : {totalPrice} $
          </h3>
          <div>
            <button onClick={handleOpen} className="buttonPayment">
              CONTINUE PAYMENT
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h4"
                  component="h2"
                  sx={{ fontWeight: 700 }}
                >
                  CONTACT DETAILS
                </Typography>
                <form>
                  <TextField
                    sx={{ marginTop: 2, width: 300 }}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </form>

                <Typography
                  id="modal-modal-title"
                  variant="h4"
                  component="h2"
                  sx={{ marginTop: 3, fontWeight: 700 }}
                >
                  SHIPPING ADDRESS
                </Typography>
                <form
                  style={{
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "space-between",
                    width: "75%",
                    flexWrap: "wrap",
                  }}
                >
                  <TextField
                    sx={{ width: 300 }}
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ width: 300 }}
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ width: 300, marginTop: 3 }}
                    id="outlined-basic"
                    label="Phone number"
                    variant="outlined"
                  />
                  <TextField
                    sx={{ width: 300, marginTop: 3 }}
                    id="outlined-basic"
                    label="Address"
                    variant="outlined"
                  />
                </form>
                <Typography
                  id="modal-modal-title"
                  variant="h4"
                  component="h2"
                  sx={{ marginTop: 3, fontWeight: 700 }}
                >
                  DELIVRY OPTIONS
                </Typography>
                <div
                  style={{
                    border: "2px solid black",
                    padding: 40,
                    width: "75%",
                    height: 75,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <section>
                    {" "}
                    <LocalShipping
                      style={{ position: "absolute", left: 50 }}
                    />{" "}
                    <span>STANDARD DELIVRY</span>
                  </section>

                  <section>
                    <p>5$</p>
                  </section>
                </div>
                <div
                  style={{
                    border: "2px solid black",
                    padding: 40,
                    width: "75%",
                    height: 75,
                    marginTop: 15,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <section>
                    <Store style={{ position: "absolute", left: 50 }} />{" "}
                    <span>COLLECT IN STORE</span>
                  </section>
                  <section>
                    <p>FREE</p>
                  </section>
                </div>
              </Box>
            </Modal>
          </div>
          {cart.map((product) => (
            <CartCards
              key={product.id}
              id={product.id}
              productImage={product.imageURL}
              productName={product.title}
              productPrice={
                product.quantity > 20 ? product.discountedPrice : product.price
              }
              quantity={product.quantityInCart}
              // discountedPrice={product.discountedPrice}
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
