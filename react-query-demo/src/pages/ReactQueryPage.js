import { useQueries, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { usePostQuery } from "../hooks/usePosts";

const ReactQueryPage = () => {
  // const { data, isLoading, isError, error, refetch } = usePostQuery();

  // console.log("ddd:", data, typeof data);
  // console.log("Error:", isError, error);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   return <h1>Error : {error.message}</h1>;
  // }

  // return (
  //   <div>
  //     {data.length <= 1 ? (
  //       <div>{data.title}</div>
  //     ) : (
  //       data?.map((item) => <div>{item.title}</div>)
  //     )}
  //     <button onClick={refetch}>새로고침</button>
  //   </div>
  // );

  const ids = [1, 2, 3, 4];

  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3004/posts/${id}`)
  }

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data.data),
      }
    },
  });

  console.log('rrrr', results);

  return <div></div>;
};

export default ReactQueryPage;
