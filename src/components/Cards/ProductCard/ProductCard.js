import React from "react";
import "./ProductCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ProductCard({ title, price, imageURL, onClick }) {
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
            <Button variant="outlined" color="success" onClick={onClick}>
              Add to CART
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
