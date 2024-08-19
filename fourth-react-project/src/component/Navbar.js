import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  faShirt,
  faUser,
  faXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggle, setToggle, authenticate, setAuthenticate }) => {
  const navItem = ["여성", "남성", "신생아", "아동", "Sale", "지속가능성"];
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const toggleLogin = () => {
    if (!authenticate) {
      navigate("/login");
    } else {
      setAuthenticate(false);
      alert('정상적으로 로그아웃 되었습니다.');
    }
  };

  const goToMain = () => {
    navigate("/");
  };

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const searchItems = (event) => {
    if (event.key === "Enter" || event.button === 0) {
      if (keyword === '') {
        alert('검색어를 입력해주세요.');
        return;
      }
      navigate(`/?q=${keyword}`);
      event.target.value = "";
    }
  };

  const onClickToggleHandler = () => {
    setToggle(!toggle);
    console.log("toggle:", toggle);
  };

  return (
    <nav>
      <div className="nav-container">
        <FontAwesomeIcon
          className="x-mark"
          icon={faXmark}
          size="xl"
          color="#fff"
          onClick={onClickToggleHandler}
        />

        <div className="logo">
          <FontAwesomeIcon
            icon={faShirt}
            style={{ color: "#fafafc" }}
            size="lg"
            onClick={goToMain}
          />
        </div>

        <ul className={`nav-bar ${toggle ? "" : "visible-none"}`}>
          {navItem.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className={`nav-bar-right ${toggle ? "" : "visible-none"}`}>
          <div className="search-area">
            <div className="search-input">
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                onKeyUp={(event) => searchItems(event)}
                onChange={handleInputChange}
              ></input>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="44px"
              viewBox="0 0 15 44"
              onMouseUp={(event) => searchItems(event)}
            >
              <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z"></path>
            </svg>
          </div>

          {authenticate ?
              (<FontAwesomeIcon
                className="login-area"
                icon={faRightFromBracket}
                style={{color: '#fffffff'}}
                size="lg"
                onClick={toggleLogin}
              />) :
              (<FontAwesomeIcon
                className="login-area"
                icon={faUser}
                style={{ color: "#fafafc" }}
                size="lg"
                onClick={toggleLogin}
              />)
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
