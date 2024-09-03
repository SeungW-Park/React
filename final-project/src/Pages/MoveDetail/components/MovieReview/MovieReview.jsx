import React, { useState } from "react";
import "./MovieReview.style.css";
import { useMovieReviewQuery } from "../../../../hooks/useMovieReview";
import LoadingIcons from "react-loading-icons";
import { Alert } from "react-bootstrap";

const MovieReview = ({ id }) => {
  const [expandedReview, setExpandedReview] = useState({});

  const {
    data: reviewData,
    isLoading,
    isError,
    error,
  } = useMovieReviewQuery({ id });
  // console.log("rrr", reviewData);

  const onClickMoreViewButton = (reviewId) => {
    setExpandedReview((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <LoadingIcons.Rings className="spinner" stroke="#ff0000" />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="review-container">
      <div className="review-title">Reviews</div>
      {reviewData.results.length === 0 ? (
        <div className="review-wrapper no-review">No Review</div>
      ) : (
        <div></div>
      )}
      {reviewData?.results.map((result) => {
        return (
          <div key={result.author} className="review-wrapper">
            <div className="review-writer">
              {result.author}{" "}
              <span className="review-time">
                {String(result.created_at).substring(0, 10)}
              </span>
            </div>
            <div className="review-content">
              {expandedReview[result.author]
                ? result.content
                : `${String(result.content).substring(0, 200)} ...`}
              <span
                className="more-view"
                onClick={() => onClickMoreViewButton(result.author)}
              >
                {expandedReview[result.author] ? " Fold" : " View More"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieReview;
