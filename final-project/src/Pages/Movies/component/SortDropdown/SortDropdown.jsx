import React from "react";
import { Dropdown } from "react-bootstrap";
import "./SortDropdown.style.css";

const SortDropdown = ({ setSortKeyword, setIsFiltered, sortTitle, setSortTitle }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {sortTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            setSortKeyword('popularity.asc');
            setSortTitle('Popularity Ascend');
            setIsFiltered(true);
          }}
        >
          Popularity Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSortKeyword('popularity.desc');
            setSortTitle('Popularity Descend');
            setIsFiltered(true);
          }}
        >
          Popularity Descend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSortKeyword('primary_release_date.asc');
            setSortTitle('Release Date Ascend');
            setIsFiltered(true);
          }}
        >
          Release Date Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSortKeyword('primary_release_date.desc');
            setSortTitle('Release Date Descend');
            setIsFiltered(true);
          }}
        >
          Release Date Descend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSortKeyword('vote_average.asc');
            setSortTitle('Vote Average Ascend');
            setIsFiltered(true);
          }}
        >
          Vote Average Ascend
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSortKeyword('vote_average.desc');
            setSortTitle('Vote Average Descend');
            setIsFiltered(true);
          }}
        >
          Vote Average Descend
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortDropdown;
