import React from "react";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "./components/MovieDetailInfo.jsx/MovieDetailInfo";
import MovieReview from "./components/MovieReview/MovieReview";
import MovieRecommendation from "./components/MovieRecommendation/MovieRecommendation";

const MovieDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <MovieDetailInfo id={id} />
      <MovieRecommendation id={id} />
      <MovieReview id={id}/>
    </div>
  );
};

export default MovieDetailPage;
