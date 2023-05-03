import React from 'react';
import {GrLike} from 'react-icons/gr'


const Card = (props) => {
  const { poster, title, year, isFavorite } = props;
  return (
    <div className="w-full  mx-auto rounded-md shadow-md overflow-hidden">
      <div className="relative">
        <img className="object-cover w-full h-96" src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"} alt={title} />
        <div className="absolute top-0 right-0 p-2">
          <button className={`text-gray-400 transition-colors duration-300 ${isFavorite ? "text-red-500" : ""}`}>
           <GrLike size={20} className='text-red-500'/>
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-gray-50 text-sm mb-2">{year}</div>
        <h3 className="text-lg font-medium text-gray-50 mb-2">{title}</h3>
      </div>
    </div>
  )
}

export default Card;