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
import { useMovieFilterQuery } from "../../hooks/useMovieFilter";

const MoviePage = () => {
  const [query] = useSearchParams();
  const [page, setPage] = useState(1);

  const keyword = query.get("q");
  const [prevKeyword, setPrevKeyword] = useState("");

  const [sortKeyword, setSortKeyword] = useState("");
  const [sortTitle, setSortTitle] = useState("Sort");

  const [genreKeyword, setGenreKeyword] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterTitle, setFilterTitle] = useState("Filter");

  useEffect(() => {
    if (keyword === "" && prevKeyword) {
      alert("검색어를 입력해주세요.");
      return;
    }
    if (keyword !== prevKeyword) {
      setPage(1);
    }
    setPrevKeyword(keyword || "");
  }, [keyword]);

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword: keyword || prevKeyword,
    page,
  });
  // console.log("ddd", data);

  const { data: filteredData, isLoading: isFilterLoading } =
    useMovieFilterQuery({ genreKeyword, sortKeyword, page });
  // console.log(sortKeyword, genreKeyword, filteredData);

  // 검색된 데이터에 필터와 정렬 적용
  const applyFiltersAndSort = (movies) => {
    let filteredMovies = movies;

    // 장르 필터링
    if (genreKeyword) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.genre_ids.includes(parseInt(genreKeyword))
      );
      console.log("fm", filteredMovies);
    }

    // 정렬
    if (sortKeyword) {
      filteredMovies = filteredMovies.slice().sort((a, b) => {
        switch (sortKeyword) {
          case "popularity.asc":
            return a.popularity - b.popularity; // 낮은 순서대로 정렬
          case "popularity.desc":
            return b.popularity - a.popularity; // 높은 순서대로 정렬
          case "primary_release_date.asc":
            return new Date(a.release_date) - new Date(b.release_date); // 오래된 순
          case "primary_release_date.desc":
            return new Date(b.release_date) - new Date(a.release_date); // 최신 순
          case "vote_average.asc":
            return a.vote_average - b.vote_average; // 낮은 평점 순
          case "vote_average.desc":
            return b.vote_average - a.vote_average; // 높은 평점 순
          default:
            return 0;
        }
        return 0;
      });
    }

    return filteredMovies;
  };

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
    // console.log("page set", page);
  };

  if (isLoading || isFilterLoading) {
    return (
      <div className="loading-spinner">
        <LoadingIcons.Rings className="spinner" stroke="#ff0000" />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const displayedMovies = applyFiltersAndSort(
    isFiltered ? filteredData?.results : data?.results
  );

  return (
    <div className="page-container">
      {data?.results.length === 0 ? null : (
        <div className="filter-container">
          <div className="dropdown-container">
            <SortDropdown
              setSortKeyword={setSortKeyword}
              setIsFiltered={setIsFiltered}
              sortTitle={sortTitle}
              setSortTitle={setSortTitle}
            />
            <FilterDropdown
              setGenreKeyword={setGenreKeyword}
              setIsFiltered={setIsFiltered}
              filterTitle={filterTitle}
              setFilterTitle={setFilterTitle}
            />
          </div>
          <button
            className="filter-rollback-button"
            onClick={() => {
              setSortKeyword("");
              setIsFiltered(false);
              setGenreKeyword("");
              setSortTitle("Sort");
              setFilterTitle("Filter");
            }}
          >
            Sort / Filter Rollback
          </button>
        </div>
      )}
      <div className="card-wrapper">
        {displayedMovies?.length > 0 ? (
          displayedMovies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))
        ) : (
          <div className="no-results">No Results for your search.</div>
        )}
      </div>
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={isFiltered ? filteredData?.total_pages : data?.total_pages} // 전체 페이지
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
