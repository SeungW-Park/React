import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-hover">
        <img className="card-img" src={item?.img} alt="" />
        <div className="card-title">
          {item?.title.length > 9
            ? `${item?.title.substring(0, 9)}...`
            : item?.title}
        </div>
        <div className="card-price">₩ {item?.price}</div>
      </div>
      <div className="card-under">
        <div className="card-choice">
          {item?.choice ? "Conscious Choice" : ""}
        </div>
        <div className="card-new">{item?.new ? "신제품" : ""}</div>
      </div>
    </div>
  );
};

export default ProductCard;
