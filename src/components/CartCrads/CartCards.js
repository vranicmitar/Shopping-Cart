import React, { useContext } from "react";
import "./CartCards.css";
import { AppContext } from "../../context/AppContext";
import DeleteButtonFromCart from "../Button/ButtonDeleteFromCart";
import { Button } from "@mui/material";

export default function CartCards({
  id,
  productName,
  productPrice,
  productImage,
  quantity,
}) {
  const { deleteFromCart, increase, decrease } = useContext(AppContext);

  return (
    <div className="mainn">
      <div className="cart-card">
        <img className="product-image" src={productImage} alt={productName} />
        <div className="product-details">
          <h2 className="productName">{productName}</h2>
          <p className="productPrice"> {productPrice * quantity}$</p>
          <p className="product-quantity">Quantity: {quantity}</p>
          <div className="buttonn">
            <DeleteButtonFromCart
              onDelete={() => {
                deleteFromCart(id);
              }}
            />
          </div>
          <div className="increaseDecrease">
            <Button
              onClick={() => {
                decrease(id);
              }}
              style={{ width: 30, fontSize: 20 }}
              variant="outlined"
            >
              -
            </Button>
            <Button
              onClick={() => {
                increase(id);
              }}
              style={{ width: 30, marginLeft: 30, fontSize: 20 }}
              variant="outlined"
            >
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
