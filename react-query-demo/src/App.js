import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReactQueryPage from "./pages/ReactQueryPage";

function App() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/');
  }

  const goToReactQueryPage = () => {
    navigate('/react-query');
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={goToHomepage}>홈페이지</li>
          <li onClick={goToReactQueryPage}>리액트 쿼리 페이지</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
      </Routes>
    </div>
  );
}

export default App;
