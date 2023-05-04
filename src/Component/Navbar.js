import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineFavorite } from "react-icons/md";
import { movieContext } from "../Context/ContextProvider";

const Navbar = () => {
  const { handlekeypress, searchMovie, setSearchMovie, fetchMovies } =
    useContext(movieContext);
    
  const handleSubmit = () => {
    fetchMovies(searchMovie);
    setSearchMovie("");
  };
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-4">
      <div className="flex justify-between px-2 md:px-4 items-center ">
        <h1 className="text-xl font-bold sm:text-3xl lg:text-4xl">MovieBox</h1>
        <div className=" bg-orange-50 rounded-full w-[150px] md:w-[250px] px-2 flex items-center sm:px-4">
          <input
            type="text"
            onChange={(e) => setSearchMovie(e.target.value)}
            onKeyDown={handlekeypress}
            value={searchMovie}
            placeholder="Search Movies"
            className="bg-transparent p-2 focus:outline-none w-full"
          />
          <BiSearchAlt size={25} onClick={handleSubmit} />
        </div>
        <Link className="flex items-center text-2xl text-orange-50" to="/fav">
          <span className="hidden mr-1 sm:flex">FAVORITE</span>
          <MdOutlineFavorite color="red" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
