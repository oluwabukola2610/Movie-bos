import React, { useContext } from "react";
import { movieContext } from "../Context/ContextProvider";
import Card from "../Component/Card";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Favorite = () => {
  const { favorites, favoriteHandler } = useContext(movieContext);
  const navigate = useNavigate();

  return (
    <div className="mx-auto px-10 max-w-[1640px] py-12 text-white text-center">
      <BsFillArrowLeftCircleFill onClick={() => navigate("/")} size={40} />

      {favorites?.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 space-y-6">
          {favorites.map((movie) => (
            <Card
              key={movie.imdbID}
              image={movie.Poster}
              title={movie.Title}
              year={movie.Year}
              addFavorite={(e) => favoriteHandler(movie, e)}
              isFavorite={movie.isFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="favorite_warning"> There is no favorite movie.</div>
      )}
    </div>
  );
};

export default Favorite;
