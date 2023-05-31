import React, { useContext, useEffect, useState } from "react";
import "./SaleProductCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActions, CardMedia } from "@mui/material";
import DeleteButton from "../../Button/Button";
import { AppContext } from "../../../context/AppContext";

export default function SaleProductCard({
  id,
  title,
  price,
  imageURL,
  addToCart,
  deleteFromCart,
  discountedPrice,
  discountPercentage,
}) {
  const { cart } = useContext(AppContext);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!!cart.find((product) => product.id === id)) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cart, id]);
  // console.log(isAdded);

  return (
    <div className="mainContainer">
      <Card sx={{ maxWidth: 450 }} className="card">
        <div className="box">
          <p style={{ color: "white", fontWeight: 600 }}>
            {discountPercentage}%
          </p>
        </div>
        <CardMedia sx={{ height: 250 }} image={imageURL} title="green iguana" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: 70, fontSize: 20 }}
          >
            {title}
          </Typography>
          <div className="description">
            <Typography variant="body1" color="text.primary">
              <p style={{ textDecoration: "line-through", color: "grey" }}>
                Price : {price} EUR
              </p>
              <br></br>{" "}
              <p style={{ fontSize: 18 }}>Discount : {discountedPrice} EUR</p>
            </Typography>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              {!isAdded ? (
                <Button
                  style={{
                    color: "#2e5b7",
                    fontWeight: "700",
                  }}
                  onClick={addToCart}
                  size="small"
                  className="btn-add"
                  variant="outlined"
                  color="success"
                >
                  ADD TO CART
                </Button>
              ) : (
                <DeleteButton onDelete={deleteFromCart} />
              )}
            </CardActions>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
