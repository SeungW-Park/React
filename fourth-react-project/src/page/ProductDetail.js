import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ProductDetail = () => {
  const sizeItem = ['XS', 'S', 'M', 'L', 'XL', "2XL"];

  return (
    <div className="detail-container">
      <div className="detail-wrapper">
        <div className="detail-photo">
          <img src='https://noona-hnm.netlify.app/pattern-jacket.jpeg' alt='상품 상세사진'></img>
        </div>

        <div className="detail-info">
          <div className="detail-name-price">
            <div className="detail-name">릴렉스핏 진</div>
            <div className="detail-price">₩ 54900</div>
          </div>

          <div className="size-title">사이즈</div>
          <div className="detail-size">
            {sizeItem.map((item, index) => (
              <div className="size-item" key={index}>{item}</div>
            ))}
          </div>

          <div className="detail-add-button">
            <FontAwesomeIcon icon={faBagShopping} size="lg" color="#fff"/>
            <span className="add-title">장바구니에 넣기</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
