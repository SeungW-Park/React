import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/AppLayout";
import Homepage from "./Pages/Homepage/Homepage";
import MoviePage from "./Pages/Movies/MoviePage";
import MovieDetailPage from "./Pages/MoveDetail/MovieDetailPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

// 홈페이지
// 영화 전체 보여주는 페이지(서치)
// 영화 디테일 페이지
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="movies">
          <Route index element={<MoviePage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
