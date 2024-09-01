import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchSearchMovie = ({ keyword }) => {
  return keyword
    ? api.get(`/search/movie?query=${keyword}`)
    : api.get("/movie/popular");
};

export const useSearchMovieQuery = ({ keyword }) => {
  return useQuery({
    queryKey: ["movie-search", keyword],
    queryFn: () => fetchSearchMovie({ keyword }),
    select: (result) => result.data,
    gcTime: 5000
  });
};
