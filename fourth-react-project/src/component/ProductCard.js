import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className="card">
      <div className="card-hover" onClick={showDetail}>
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
        <div className="card-new">{item?.new ? "NEW" : ""}</div>
      </div>
        <div className="card-info-under">
          <div className="card-title-under">
            {item?.title.length > 9
              ? `${item?.title.substring(0, 9)}...`
              : item?.title}
          </div>
          <div className="card-price-under">₩ {item?.price}</div>
        </div>
    </div>
  );
};

export default ProductCard;
