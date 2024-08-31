import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";

const PopularMovieSlide = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();

  return (
    <div className="slide-container">
      <MovieSlider
        title="Popular Movies"
        movies={data?.results}
        isLoading={isLoading}
        isError={isError}
        error={error}
        responsive={responsive}
      />
    </div>
  );
};

export default PopularMovieSlide;
