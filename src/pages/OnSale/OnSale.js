import React, { useContext, useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./OnSale.css";
import { AppContext } from "../../context/AppContext";
import SaleProductCard from "../../components/Cards/SaleProductCard/SaleProductCard";

const OnSale = () => {
  const { onSaleProducts, cart, addToCart, deleteFromCart } =
    useContext(AppContext);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const productsPerPage = 10;
  const numOfPages = Math.ceil(onSaleProducts.length / productsPerPage);
  console.log(cart);

  return (
    <>
      <div className="card">
        {onSaleProducts
          .map((product) => (
            <SaleProductCard
              key={product.id}
              id={product.id}
              imageURL={product.imageURL}
              title={product.title}
              price={
                product.price -
                (product.price * product.discountPercentage) / 100
              }
              discountedPrice={product.discountedPrice}
              discountPercentage={product.discountPercentage}
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

export { OnSale };
