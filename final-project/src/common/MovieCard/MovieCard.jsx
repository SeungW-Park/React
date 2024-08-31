import React from "react";
import "./MovieCard.style.css";
import { Badge } from "react-bootstrap";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="movie-card-info">
        <h1 className="movie-title">
          {movie.title.length >= 25
            ? movie.title.substring(0, 25) + "..."
            : movie.title}
        </h1>
        <div className="genre-badge">
          {showGenre(movie.genre_ids).map((id, index) => {
            return (
              <Badge className="badge" bg="danger" key={index}>
                {id}
              </Badge>
            );
          })}
        </div>
        <div className="vote-average">
          <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
          &nbsp;&nbsp;
          {Number(movie.vote_average).toFixed(1)}
        </div>
        <div className="movie-popularity">
          <FontAwesomeIcon
            icon={faHeartCirclePlus}
            style={{ color: "#f75757" }}
          />
          &nbsp;&nbsp;
          {Number(movie.popularity).toFixed(1)}
        </div>
        <div className="movie-adult">{movie.adult ? "over18" : "ALL"}</div>
      </div>
    </div>
  );
};

export default MovieCard;