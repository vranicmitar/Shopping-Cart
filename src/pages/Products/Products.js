import React, { useContext, useState } from "react";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import Pagination from "@mui/material/Pagination";
import "./Products.css";
import { AppContext } from "../../context/AppContext";

const Products = () => {
  const { products, addToCart, deleteFromCart } = useContext(AppContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const productsPerPage = 10;
  const numOfPages = Math.ceil(
    products.filter((product) => product.quantity <= 20).length /
      productsPerPage
  );
  // console.log(products);
  // console.log(cart);

  return (
    <>
      <div className="card">
        {products
          .filter((product) => product.quantity <= 20)
          .map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageURL={product.imageURL}
              title={product.title}
              price={product.price}
              addToCart={() => {
                addToCart(product.id);
              }}
              deleteFromCart={() => {
                deleteFromCart(product.id);
              }}
            />
          ))
          .slice((page - 1) * productsPerPage, page * productsPerPage)}
      </div>
      <div className="pagination">
        <Pagination
          count={numOfPages}
          page={page}
          onChange={handleChange}
          size="large"
          color="error"
        />
      </div>
    </>
  );
};

export default Products;
