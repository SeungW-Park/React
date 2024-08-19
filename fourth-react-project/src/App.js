import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import PrivateRoute from "./route/PrivateRoute";
import Navbar from "./component/Navbar";

// 1. 전체 상품 페이지, 로그인, 상품 상세페이지 만들기
// 2. 전체 상품페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 상품 디테일을 눌렀으나, 로그인이 안되있을 경우 로그인 페이지 리디렉트
// 5. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
// 6. 로그아웃 버튼을 클릭하면 로그아웃이 된다.
// 7. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다.(다시 로그인 페이지 보임)
// 8. 로그인을 하면 로그아웃이 보이고, 로그아웃을 하면 로그인이 보인다.
// 9. 상품을 검색할 수 있다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar
        toggle={toggle}
        setToggle={setToggle}
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
      />
      <Routes>
        <Route
          path="/"
          element={<ProductAll loading={loading} setLoading={setLoading} />}
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/products/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
