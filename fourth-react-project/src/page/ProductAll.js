import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import ProductCard from "../component/ProductCard";

const ProductAll = ({ loading, setLoading }) => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      setLoading(true);
      const searchQuery = query.get("q") ?? "";
      const PORT_NUM = "4000";
      const url = `http://localhost:${PORT_NUM}/products?q=${searchQuery}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();

      // 서버측 쿼리문 미작동으로 프론트 단에서 쿼리 기능 구현
      const filteredData = searchQuery
        ? data.filter((item) => item.title.includes(searchQuery))
        : data;
      console.log(filteredData);
      setLoading(false);
      if (filteredData.length === 0) {
        alert("검색결과가 없습니다.\n메인페이지로 돌아갑니다.");
        return;
      }
      setProductList(filteredData);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="card-container">
      {loading ? (
        <BeatLoader className="loading-spinner" />
      ) : (
        <div className="card-wrapper">
          {productList.map((item) => (
            <ProductCard
              item={item}
              loading={loading}
              setLoading={setLoading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductAll;
