import React from "react";
import "./Homepage.style.css";
import Banner from "./components/Banner/Banner";
import { ParallaxProvider } from "react-scroll-parallax";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedMovieSlide from "./components/TopRatedMovieSlide/TopRatedMovieSlide";
import UpComingMovieSlide from "./components/UpcomingMovieSlide/UpComingMovieSlide";

// 1.　배너 => popular movie를 배너에 보여주기
// 2. popular movie
// 3. top rated movie
// 4. popular movie

const Homepage = () => {
  return (
    <div>
      <ParallaxProvider>
        <Banner />
      </ParallaxProvider>
      <div className="movie-slide">
        <PopularMovieSlide />
        <TopRatedMovieSlide />
        <UpComingMovieSlide />
      </div>
    </div>
  );
};

export default Homepage;
