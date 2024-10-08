import React from "react";
import Alert from "react-bootstrap/Alert";
import "./Banner.style.css";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import LoadingIcons from "react-loading-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  // console.log("ddd", data);

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
    <div className="banner-container">
      <ParallaxBanner className="banner">
        <ParallaxBannerLayer
          image={`https://image.tmdb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}`}
          speed={-25}
        />
        <ParallaxBannerLayer className="banner-title">
          <h1>{data?.results[0].original_title}</h1>
        </ParallaxBannerLayer>
        <ParallaxBannerLayer className="banner-desc-icon">
          <div className="banner-desc-icon-div">
            <FontAwesomeIcon
              icon={faCircleQuestion}
              size="2xl"
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="banner-desc-div">
            {data?.results[0].overview}
          </div>
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </div>
  );
};

export default Banner;
