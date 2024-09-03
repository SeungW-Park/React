import React from "react";
import "./MovieRecommendation.style.css";
import { useMovieRecommendationQuery } from "../../../../hooks/useMovieRecommendation";
import LoadingIcons from "react-loading-icons";
import { Alert } from "react-bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const MovieRecommendation = ({ id }) => {
  const {
    data: recData,
    isLoading,
    isError,
    error,
  } = useMovieRecommendationQuery({ id });
  console.log("rec:", recData);

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
      <div className="rec-card-container">
        <MovieSlider title="Movie Recommendation" movies={recData.results} isLoading={isLoading} isError={isError} responsive={responsive} isWhite={true}/>
      </div>
  );
};

export default MovieRecommendation;
