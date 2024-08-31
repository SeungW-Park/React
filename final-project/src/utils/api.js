import axios from "axios";

// const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZWI0OTM3YjkwOWNjMDNhOGQ4ZGYzNDVjNzgzMTkyYSIsIm5iZiI6MTcyNTAyNjk2Ni45MDI4ODYsInN1YiI6IjY2OTQ5NDAzNTFiNTE3M2YzZjY2MDY5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qi8NNc6dVuvwkha2hhBG_MVs2aXgI7CLlmhoRCc8gl8`,
  },
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
