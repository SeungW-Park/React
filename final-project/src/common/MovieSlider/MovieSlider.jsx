import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import { Alert } from "react-bootstrap";
import LoadingIcons from "react-loading-icons";

const MovieSlider = ({
  title,
  movies,
  isLoading,
  isError,
  error,
  responsive,
}) => {
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
    <div>
      <h3 className="slide-title">{title}</h3>

      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
