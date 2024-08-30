import React from "react";
import "./NotFoundPage.style.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page-body">
      <div className="not-found-container">
        <img src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=750w"></img>
        <div className="not-found-message">
          <div className="message-title">AWWW... DON'T CRY.</div>
          <div className="message-body">
            <span id="body-first-line">It's just a 404 Error!</span>
            <span id="body-second-line">
              What you're looking for may have been misplaced in Long Term
              Memory.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
