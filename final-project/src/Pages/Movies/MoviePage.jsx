import React, { useState } from "react";
import "./MoviePage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import LoadingIcons from "react-loading-icons";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";


const MoviePage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  console.log("ddd", data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    console.log('page set', page);
  };

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
          <MovieCard movie={movie} key={index}/>
        ))}
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={data?.total_pages} // 전체 페이지
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </div>
  );
};

export default MoviePage;
