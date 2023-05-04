import React from "react";
import { MdOutlineFavorite } from "react-icons/md";

const Card = (props) => {
  const { image, title, year, isFavorite, addFavorite } = props;
  return (
    <div className="w-fit  mx-auto rounded-md shadow-md overflow-hidden">
      <div className="relative">
        <img
          className="object-cover w-full h-96"
          src={image !== "N/A" ? image : "https://via.placeholder.com/400"}
          alt={title}
        />
        <div className="absolute top-0 right-0 p-2" onClick={addFavorite}>
          {isFavorite ? (
            <MdOutlineFavorite color="red" size={25}/>
          ) : (
            <MdOutlineFavorite color="white" size={25}/>
          )}
        </div>
      </div>

      <div className="p-4">
        <div className="text-gray-50 text-sm mb-2">{year}</div>
        <h3 className="text-lg font-medium text-gray-50 mb-2">{title}</h3>
      </div>
    </div>
  );
};

export default Card;
