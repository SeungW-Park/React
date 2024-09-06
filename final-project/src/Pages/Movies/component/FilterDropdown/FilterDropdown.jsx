import React from "react";
import "./FilterDropdown.style.css";
import { Dropdown } from "react-bootstrap";

const FilterDropdown = ({ setGenreKeyword, setIsFiltered, filterTitle, setFilterTitle }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {filterTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("28");
            setIsFiltered(true);
            setFilterTitle('Action');
          }}
        >
          Action
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("12");
            setIsFiltered(true);
            setFilterTitle('Adventure');
          }}
        >
          Adventure
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("16");
            setIsFiltered(true);
            setFilterTitle('Animation');
          }}
        >
          Animation
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("80");
            setIsFiltered(true);
            setFilterTitle('Crime');
          }}
        >
          Crime
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("35");
            setIsFiltered(true);
            setFilterTitle('Comedy');
          }}
        >
          Comedy
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("27");
            setIsFiltered(true);
            setFilterTitle('Horror');
          }}
        >
          Horror
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("10749");
            setIsFiltered(true);
            setFilterTitle('Romance');
          }}
        >
          Romance
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setGenreKeyword("53");
            setIsFiltered(true);
            setFilterTitle('Thriller');
          }}
        >
          Thriller
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default FilterDropdown;
