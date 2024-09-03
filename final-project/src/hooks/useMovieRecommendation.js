import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieRecommendation = ({id}) => {
  return api.get(`/movie/${id}/recommendations`);
}

export const useMovieRecommendationQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-recommendation", { id }],
    queryFn: () => fetchMovieRecommendation({ id }),
    select: (result) => result.data,
    gcTime: 10000,
  });
};
