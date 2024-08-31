import React from "react";
import { useUpcomingMoviesQuery } from "../../../../hooks/useUpcomingMovies";
import { responsive } from "../../../../constants/responsive";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const UpComingMovieSlide = () => {
  const {data, isLoading, isError, error} = useUpcomingMoviesQuery();

  return (
    <div className="slide-container">
    <MovieSlider
      title="Upcoming Movies"
      movies={data?.results}
      isLoading={isLoading}
      isError={isError}
      error={error}
      responsive={responsive}
    />
    </div>
  );
};

export default UpComingMovieSlide;
