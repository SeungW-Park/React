import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navItem = ["여성", "남성", "신생아", "아동", "Sale", "지속가능성"];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <FontAwesomeIcon
            icon={faShirt}
            style={{ color: "#fafafc" }}
            size="lg"
          />
        </div>

        <ul className="nav-bar">
          {navItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="nav-bar-right">
          <div className="search-area">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="44px"
              viewBox="0 0 15 44"
            >
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
            <div className="search-input">
              <input type="text" placeholder="검색어를 입력하세요."></input>
            </div>
          </div>

          <div className="login-area" onClick={goToLogin}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#fafafc" }}
              size="lg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
