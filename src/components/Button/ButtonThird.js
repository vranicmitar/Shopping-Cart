import * as React from "react";
import "./ButtonDeleteFromCart.css";
import { Button } from "@mui/material";

export default function ButtonThird({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  return <Button onClick={handleDelete}>Yes</Button>;
}
