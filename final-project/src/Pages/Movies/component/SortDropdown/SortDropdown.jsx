import React from "react";
import { Dropdown } from "react-bootstrap";
import "./SortDropdown.style.css";

const SortDropdown = ({ sortMovies }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            sortMovies('PopularityAscend');
          }}
        >
          Popularity Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('PopularityDescend');
          }}
        >
          Popularity Descend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('ReleaseDateAscend');
          }}
        >
          Release Date Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('ReleaseDateDescend');
          }}
        >
          Release Date Descend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('VoteAverageAscend');
          }}
        >
          Vote Average Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('VoteAverageDescend');
          }}
        >
          Vote Average Descend
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropdown;
