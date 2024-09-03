import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailInfo from "./components/MovieDetailInfo.jsx/MovieDetailInfo";
import MovieReview from "./components/MovieReview/MovieReview";
import MovieRecommendation from "./components/MovieRecommendation/MovieRecommendation";
import MovieTrailer from "./components/MovieTrailer/MovieTrailer";

const MovieDetailPage = () => {
  const { id } = useParams();
  const [modalShow, setModalShow] = useState(false);
  const [fullscreen] = useState(false);

  return (
    <div>
      <MovieDetailInfo id={id} setModalShow={setModalShow} />
      <MovieRecommendation id={id} />
      <MovieReview id={id} />
      <MovieTrailer show={modalShow} onHide={() => setModalShow(false)} fullscreen={fullscreen} id={id}/>
    </div>
  );
};

export default MovieDetailPage;
