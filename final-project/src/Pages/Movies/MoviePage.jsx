import React from "react";
import "./MoviePage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import LoadingIcons from "react-loading-icons";
import MovieCard from "../../common/MovieCard/MovieCard";

// 경로 2가지
// nav바에서 클릭해서 온 경우 => popular movie 보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화들을 보여줌

// 페이지네이션 설치
// 페이지 스테이트 만들기
// 페이지네이션 클릭할때마다 페이지 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 페이지까지 넣어서 render
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword });
  console.log("ddd", data);

  if (isLoading) {
    return (
      <div className="loading-spinner">
        <LoadingIcons.ThreeDots className="spinner" stroke="#ff0000" />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div className="page-container">
      <form className="filter-content">
        <div className="filter-01">
          <input type="radio" name="tab-menu" id="tab01" checked />
          <label htmlFor="tab01">Relativity</label>
        </div>
        <div className="filter-02">
          <input type="radio" name="tab-menu" id="tab02" />
          <label htmlFor="tab02">Popularity</label>
        </div>
        <div className="filter-03">
          <input type="radio" name="tab-menu" id="03" />
          <label htmlFor="03">Latest</label>
        </div>
        <div className={`filter-04`}>
          <select name="color">
            <option value="all">All</option>
            <option value="action">Action</option>
            <option>Action</option>
            <option>Action</option>
          </select>
        </div>
      </form>
      <div className="card-wrapper">
        {data?.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
