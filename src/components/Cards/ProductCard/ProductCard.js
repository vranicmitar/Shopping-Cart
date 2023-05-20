import React from "react";
import "./ProductCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({
  productName,
  productPrice,
  productImage,
  onPress,
}) {
  return (
    <div>
      <Card sx={{ width: 400, height: 450 }}>
        <CardMedia
          sx={{ height: 300 }}
          image={productImage}
          title="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ height: 70 }}
          >
            {productName}
          </Typography>
          <div className="description">
            <Typography variant="body1" color="text.primary">
              Price : {productPrice} EUR
            </Typography>
            <Button variant="outlined" color="success">
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
