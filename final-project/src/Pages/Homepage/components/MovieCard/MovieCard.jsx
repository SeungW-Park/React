import React from "react";
import "./MovieCard.style.css";
import { Badge } from "react-bootstrap";

const MovieCard = ({ movie }) => {
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
          {movie.genre_ids.map((id, index) => {
            return (
              <Badge className="badge" bg="danger" key={index}>
                {id}
              </Badge>
            );
          })}
        </div>
        <div className="vote-average">
          RATE : {Number(movie.vote_average).toFixed(1)}
        </div>
        <div className="movie-popularity">
          POPULAR : {Number(movie.popularity).toFixed(1)}
        </div>
        <div className="movie-adult">{movie.adult ? "over18" : "under18"}</div>
      </div>
    </div>
  );
};

export default MovieCard;
