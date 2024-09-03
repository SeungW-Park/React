import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieTrailer = (id) => {
  return api.get(`/movie/${id}/videos`);
};

export const useMovieTrailerQuery = (id) => {
  return useQuery({
    queryKey: ["movie-trailer", { id }],
    queryFn: () => fetchMovieTrailer(id),
    select: (result) => result.data.results[0],
    gcTime: 10000,
  });
};
