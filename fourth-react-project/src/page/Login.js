import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    // console.log("login user function issue");
    setAuthenticate(true);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="text-box">
          <div className="text-title">로그인</div>
          <div className="text-desc">아이디와 비밀번호를 입력해 주세요.</div>
        </div>
        <form className="login-form" onSubmit={(event) => loginUser(event)}>
          <div className="id-area">
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#161617cc" }}
              size="lg"
            />
            <input
              type="email"
              className="id-input"
              placeholder="아이디를 입력해주세요."
            />
          </div>
          <div className="pw-area">
            <FontAwesomeIcon
              icon={faLock}
              style={{ color: "#161617cc" }}
              size="lg"
            />
            <input
              type="password"
              className="pw-input"
              placeholder="비밀번호를 입력해주세요."
            />
          </div>
          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
