import React, { useContext } from "react";
import { movieContext } from "../Context/ContextProvider";
import Card from "./Card";
import { Link } from "react-router-dom";

const HomeCard = () => {
  const { movies } = useContext(movieContext);
  return (
    <div className="mx-auto px-10 max-w-[1640px] py-12">
      {movies?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 space-y-6">

          {movies?.map((movie) => {
            return (
              <Link 
                to={`movies/${movie.imdbID}`} 
                className=""
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  poster={movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  // addFavorite={(e) => (movie, e)}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="search-warning">
          <p>Search a movie!</p>
          <p>i.e. Harry Potter</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
