import React from "react";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";
import { responsive } from "../../../../constants/responsive";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";

const TopRatedMovieSlide = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  return (
    <div className="slide-container">
      <MovieSlider
        title="Top Rated Movies"
        movies={data?.results}
        isLoading={isLoading}
        isError={isError}
        error={error}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovieSlide;
