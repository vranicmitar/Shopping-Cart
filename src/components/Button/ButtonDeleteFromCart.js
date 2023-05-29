import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./ButtonDeleteFromCart.css";

export default function DeleteButtonFromCart({ onDelete }) {
  const handleDelete = () => {
    onDelete();
  };
  return <CloseIcon onClick={handleDelete} className="deleteButton" />;
}
