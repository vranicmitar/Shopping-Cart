import React from "react";
import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import products from "../../common/products.json";
import "./Products.css";

const Products = () => {
  return (
    <div className="card">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          imageURL={product.imageURL}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Products;
