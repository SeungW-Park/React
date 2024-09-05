import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./SortDropdown.style.css";

const SortDropdown = ({ sortMovies, title, setTitle }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            sortMovies('PopularityAscend');
            setTitle('Popularity Ascend');
          }}
        >
          Popularity Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('PopularityDescend');
            setTitle('Popularity Descend');
          }}
        >
          Popularity Descend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('ReleaseDateAscend');
            setTitle('Release Date Ascend');
          }}
        >
          Release Date Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('ReleaseDateDescend');
            setTitle('Release Date Descend');
          }}
        >
          Release Date Descend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('VoteAverageAscend');
            setTitle('Vote Average Ascend');
          }}
        >
          Vote Average Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            sortMovies('VoteAverageDescend');
            setTitle('Vote Average Descend');
          }}
        >
          Vote Average Descend
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropdown;
