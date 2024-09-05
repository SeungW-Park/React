import React from "react";
import "./FilterDropdown.style.css";
import { Dropdown } from "react-bootstrap";

const FilterDropdown = () => {
  return <Dropdown>
  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
    Filter
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>
      Action
    </Dropdown.Item>
    <Dropdown.Item>
      Adventure
    </Dropdown.Item>
    <Dropdown.Item>
      Animation
    </Dropdown.Item>
    <Dropdown.Item>
      Crime
    </Dropdown.Item>
    <Dropdown.Item>
      Comedy
    </Dropdown.Item>
    <Dropdown.Item>
      Horror
    </Dropdown.Item>
    <Dropdown.Item>
      Romance
    </Dropdown.Item>
    <Dropdown.Item>
      Thriller
    </Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>;
};

export default FilterDropdown;
