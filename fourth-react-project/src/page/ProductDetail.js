import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { BeatLoader } from "react-spinners";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [sizeList, setSizeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProductDetail = async () => {
    setLoading(true);
    const url = new URL(`http://localhost:4000/products/${id}`);
    const res = await fetch(url);
    const data = await res.json();

    setProduct(data);
    setSizeList([...data?.size]);
    setLoading(false);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="detail-container">
      {loading ? (
        <BeatLoader className="loading-spinner" />
      ) : (
        <div className="detail-wrapper">
          <div className="detail-photo">
            <img src={product?.img} alt="상품 상세사진"></img>
          </div>

          <div className="detail-info">
            <div className="detail-name-price">
              <div className="detail-name">{product?.title}</div>
              <div className="detail-price">₩ {product?.price}</div>
            </div>

            <div className="size-title">사이즈</div>
            <div className="detail-size">
              {sizeList.map((item, index) => (
                <div className="size-item" key={index}>
                  {item}
                </div>
              ))}
            </div>

            <div className="detail-add-button">
              <FontAwesomeIcon icon={faBagShopping} size="lg" color="#fff" />
              <span className="add-title">장바구니에 넣기</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
