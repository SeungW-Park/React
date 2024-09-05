import React, { useEffect, useState } from "react";
import "./MoviePage.style.css";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import LoadingIcons from "react-loading-icons";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import SortDropdown from "./component/SortDropdown/SortDropdown";
import FilterDropdown from "./component/FilterDropdown/FilterDropdown";

const MoviePage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);

  const keyword = query.get("q");
  const [prevKeyword, setPrevKeyword] = useState("");

  const [isSorted, setIsSorted] = useState(false);
  const [sortedArray, setSortedArray] = useState([]);
  const [sortKeyword, setSortKeyword] = useState('');
  const [title, setTitle] = useState('Sort');

  useEffect(() => {
    if (keyword === "" && prevKeyword) {
      alert("검색어를 입력해주세요.");
      return;
    }
    setPrevKeyword(keyword || "");
  }, [keyword]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword: keyword || prevKeyword,
    page,
  });
  // console.log("ddd", data);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    console.log("page set", page);
  };

  const sortMovies = (sortKeyword) => {
    setSortKeyword(sortKeyword);
    if (sortKeyword === "PopularityAscend") {
      setIsSorted(true);
      setSortedArray(
        data?.results.slice().sort((a, b) => a.popularity - b.popularity)
      );
      console.log("popAs", sortedArray);
    } else if (sortKeyword === "PopularityDescend") {
      setIsSorted(true);
      setSortedArray(
        data?.results.slice().sort((a, b) => b.popularity - a.popularity)
      );
      console.log("popDs", sortedArray);
    } else if (sortKeyword === "ReleaseDateAscend") {
      setIsSorted(true);
      setSortedArray(
        data?.results.slice().sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      );
      console.log('rlsAs', sortedArray);
    } else if (sortKeyword === "ReleaseDateDescend") {
      setIsSorted(true);
      setSortedArray(
        data?.results.slice().sort((a, b) => new Date(a.release_date) - new Date(b.release_date))
      );
      console.log('rlsDs', sortedArray);
    } else if (sortKeyword === "VoteAverageAscend") {
      setIsSorted(true);
      setSortedArray(
        data?.results.slice().sort((a, b) => a.vote_average - b.vote_average)
      );
      console.log('voteAvgAs', sortedArray);
    } else if (sortKeyword === "VoteAverageDescend") {
      setIsSorted(true);
      setSortedArray(
        data?.results.slice().sort((a, b) => b.vote_average - a.vote_average)
      );
      console.log('voteAvgDs', sortedArray);
    }
  };

  useEffect(() => {
    if (isSorted && data) {
      sortMovies(sortKeyword);
    }
  }, [data, sortKeyword, isSorted]);

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
    <div className="page-container">
      <div className="filter-container">
        <button
          className="filter-rollback-button"
          onClick={() => {
            setIsSorted(false);
            setSortedArray(data?.results);
            setTitle('Sort');
          }}
        >
          Sort / Filter Rollback
        </button>
        <div className="dropdown-container">
          <SortDropdown sortMovies={sortMovies} title={title} setTitle={setTitle}/>
          <FilterDropdown />
        </div>
      </div>
      <div className="card-wrapper">
        {(isSorted ? sortedArray : data?.results)?.length > 0 ? (
          (isSorted ? sortedArray : data?.results).map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))
        ) : (
          <div className="no-results">No Results</div>
        )}
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
        containerClassName="pagination-custom"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </div>
  );
};

export default MoviePage;
