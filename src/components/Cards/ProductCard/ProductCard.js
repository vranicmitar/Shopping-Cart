import React, { useContext, useEffect, useState } from "react";
import "./ProductCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardActions, CardMedia } from "@mui/material";
import DeleteButton from "../../Button/Button";
import { AppContext } from "../../../context/AppContext";

export default function ProductCard({
  id,
  title,
  price,
  imageURL,
  addToCart,
  deleteFromCart,
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

  return (
    <div className="mainContainer">
      <Card sx={{ maxWidth: 450 }} className="card">
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
              Price : {price} EUR
            </Typography>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              {!isAdded ? (
                <Button
                  style={{ color: "#2e5b36", fontWeight: "700" }}
                  onClick={addToCart}
                  size="small"
                  className="btn-add"
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
