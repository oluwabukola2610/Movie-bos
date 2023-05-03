import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
const API_KEY = '97856c9c'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=IMDB_ID`;
export const movieContext = createContext();

function ContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [getMovieDetails, setgetSelectedMovie] = useState();

  const fetchMovies = async (searchValue) => {
    const response = await axios(`${API_URL}&s=${searchValue}`);
    const data = response.data;
    setMovies(data.Search);
  };
  const showDetail = async (id) => {
    const response = await axios(`${API_URL}&i=${id}`);
    const data = response.data;
    setgetSelectedMovie(data);
    console.log(data)
  
  };
  
  const handlekeypress = (event) => {
    if (event.key === "Enter") {
      fetchMovies(searchMovie);
    }
  };
  useEffect(() => {
    fetchMovies("Spider");
  }, []);

  const contextValue = {
    movies,
    handlekeypress,
    searchMovie,
    setSearchMovie,
    getMovieDetails,
    showDetail,
  };
  return (
    <movieContext.Provider value={contextValue}>
      {children}
    </movieContext.Provider>
  );
}

export default ContextProvider;
