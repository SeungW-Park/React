import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPost = (postId = '') => {
  if (postId === '') {
    return axios.get(`http://localhost:3004/posts`);
  } else {
    return axios.get(`http://localhost:3004/posts/${postId}`);
  }
};

export const usePostQuery = (postId) => {
  return useQuery({
    queryKey: ["posts", postId],
    queryFn: () => fetchPost(postId),
    retry: 1,
    select: (data) => {
      return data.data
    },
    enabled: false
  });
}