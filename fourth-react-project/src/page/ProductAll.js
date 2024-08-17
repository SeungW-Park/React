import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    try {
      const url = new URL("http://localhost:4000/products");
      const res = await fetch(url);
      // if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      console.log(data);
      setProductList(data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="card-container">
      <div className="card-wrapper">
        {productList.map((item) => (
          <ProductCard item={item}/>
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
