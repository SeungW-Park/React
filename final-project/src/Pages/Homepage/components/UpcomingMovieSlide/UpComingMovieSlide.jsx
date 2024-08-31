import React from "react";
import "./UpComingMovieSlide.style.css";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import { Alert } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import MovieCard from "../MovieCard/MovieCard";

const UpComingMovieSlide = () => {
  const {data, isLoading, isError, error} = useUpcomingMoviesQuery();
  console.log('ddd', data);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 4,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1150, min: 700 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="slide-container">
      <h3 className="slide-title">Upcoming Movies</h3>

      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default UpComingMovieSlide;
