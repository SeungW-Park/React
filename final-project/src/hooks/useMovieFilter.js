import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieFilter = ({ genreKeyword, sortKeyword, page }) => {
  return api.get(
    `/discover/movie?with_genres=${genreKeyword}&sort_by=${sortKeyword}&page=${page}`
  );
};

export const useMovieFilterQuery = ({ genreKeyword, sortKeyword, page }) => {
  return useQuery({
    queryKey: ["movie-filter", { genreKeyword, sortKeyword, page }],
    queryFn: () => fetchMovieFilter({ genreKeyword, sortKeyword, page }),
    select: (result) => result.data,
  });
};
