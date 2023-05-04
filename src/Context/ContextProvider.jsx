import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
const API_KEY = '97856c9c'
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;
export const movieContext = createContext();

function ContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [MovieDetails, setMovieDetails] = useState();
  const [favorites, setFavorites] = useState([]);


  const fetchMovies = async (searchValue) => {
    const response = await axios(`${API_URL}&s=${searchValue}`);
    const data = response.data;
    setMovies(data.Search);
  };
  const showDetail = async (id) => {
    const response = await axios(
      
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
    const data = response.data;
    setMovieDetails(data);
    console.log(data)
  
  };
  
  const handlekeypress = (event) => {
    if (event.key === "Enter") {
      fetchMovies(searchMovie);
    }
  };
  useEffect(() => {
    fetchMovies('spider man');
  }, []);

  
  const addFavoriteMovie = (movie) => {
    movie.isFavorite = true;
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  };

  const favoriteHandler = (movie, e) => {
    e.preventDefault();
    if (favorites.includes(movie)) {
      removeFavoriteMovie(movie);
    } else {
      addFavoriteMovie(movie);
    }
  };
  const removeFavoriteMovie = (movie) => {
    movie.isFavorite = false;
    const newFavoriteList = favorites.filter(
      (fav) => fav.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };
  const contextValue = {
    movies,
    handlekeypress,
    searchMovie,
    setSearchMovie,
    MovieDetails,
    showDetail,
    fetchMovies,
    favoriteHandler,
    favorites
  };
  return (
    <movieContext.Provider value={contextValue}>
      {children}
    </movieContext.Provider>
  );
}

export default ContextProvider;
