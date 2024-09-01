import React from "react";
import Logo from "../images/Logo.png";
import "./AppLayout.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AppLayout = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState();

  const goToHome = () => {
    navigate("/");
  };

  const goToMovies = () => {
    navigate("/movies");
  };

  const searchByKeyword = (event) => {
    event.preventDefault();
    // url 바꿔주기
    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="total-container">
      <div className="nav-bar">
        <div className="logo" onClick={goToHome}>
          <img src={Logo} alt="로고사진"></img>
        </div>
        <ul className="menu-items">
          <li className="menu-item" onClick={goToHome}>
            Home
          </li>
          <li className="menu-item" onClick={goToMovies}>
            Movie
          </li>
        </ul>
        <form className="search-area" onSubmit={searchByKeyword}>
          <input
            type="text"
            placeholder="Type search value"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
          />
          <button className="search-button" type="submit">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              color="#000"
            ></FontAwesomeIcon>
          </button>
        </form>
        <div className="menu-icon">
          <input type="checkbox" id="menuicon"></input>
          <label htmlFor="menuicon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="side-bar">
            <form className="search-area-sm" onSubmit={searchByKeyword}>
              <input
                type="text"
                placeholder="Type search value"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <button className="search-button" type="submit">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  color="#000"
                ></FontAwesomeIcon>
              </button>
            </form>
            <ul className="menu-items-sm">
              <li className="menu-item" onClick={goToHome}>
                Home
              </li>
              <li className="menu-item" onClick={goToMovies}>
                Movie
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default AppLayout;
