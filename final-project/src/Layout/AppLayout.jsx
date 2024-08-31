import React from "react";
import Logo from "../images/Logo.png";
import "./AppLayout.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src={Logo} alt='로고사진'></img>
        </div>
        <ul className="menu-items">
          <li className="menu-item">Home</li>
          <li className="menu-item">Movie</li>
        </ul>
        <div className="search-area">
          <input type="text" placeholder="Type search value" />
          <button className="search-button">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              color="#000"
            ></FontAwesomeIcon>
          </button>
        </div>
        <div className="menu-icon">
          <input type="checkbox" id="menuicon"></input>
          <label htmlFor="menuicon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="side-bar">
            <div className="search-area-sm">
              <input type="text" placeholder="Type search value" />
              <button className="search-button">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  color="#000"
                ></FontAwesomeIcon>
              </button>
            </div>
            <ul className="menu-items-sm">
              <li className="menu-item">Home</li>
              <li className="menu-item">Movie</li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AppLayout;
