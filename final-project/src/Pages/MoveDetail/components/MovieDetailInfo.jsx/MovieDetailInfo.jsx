import React from "react";
import LoadingIcons from "react-loading-icons";
import "./MovieDetailInfo.style.css";
import { Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCirclePlus,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { useViewMovieDetailQuery } from "../../../../hooks/useViewMovieDetail";

const MovieDetailInfo = ({ id }) => {
  const { data, isLoading, isError, error } = useViewMovieDetailQuery({ id });
  // console.log("vvv", data);

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
    <div
      className="detail-container"
      style={{
        backgroundImage: `url(${
          data?.backdrop_path
            ? `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.backdrop_path}`
            : `https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.poster_path}`
        })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="detail-wrapper">
        <div
          className="detail-poster"
          style={{
            backgroundImage: `url(${`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`})`,
          }}
        ></div>
        <div className="detail-inform">
          <div className="detail-title">{data?.original_title}</div>
          <div className="genre-wrapper">
            {data?.genres.map((genre) => {
              return (
                <div key={genre.id} className="detail-genre">
                  {genre.name}
                </div>
              );
            })}
          </div>
          <div className="detail-overview">{data?.overview}</div>
          <div className="detail-popular">
            <FontAwesomeIcon
              icon={faHeartCirclePlus}
              style={{ color: "#FF0000" }}
            />{" "}
            &nbsp;&nbsp;
            {Number(data?.popularity).toLocaleString("ko-KR")}
          </div>
          <div className="detail-budget">
            <FontAwesomeIcon icon={faSackDollar} style={{ color: "#FFA200" }} />{" "}
            &nbsp;&nbsp;
            {Number(data?.budget).toLocaleString("ko-KR")}
          </div>
          <div className="detail-release">Release : {data?.release_date}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailInfo;
