import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { movieContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const Detail = () => {
  let { id } = useParams();
  const { showDetail, MovieDetails } = useContext(movieContext);
  const navigate = useNavigate();

  useEffect(() => {
    showDetail(id);
    console.log(id);
  }, [id]);

  return (
    <div className=" min-h-screen text-white text-center">
      <BsFillArrowLeftCircleFill onClick={() => navigate("/")} size={40} className="m-6" />

      <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8  ">
        {MovieDetails ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1">
              <img
                className="object-cover w-full h-full"
                src={
                  MovieDetails.Poster !== "N/A"
                    ? MovieDetails.Poster
                    : "https://via.placeholder.com/400"
                }
                alt={MovieDetails.Title}
              />
            </div>
            <div className="col-span-2">
              <div className="px-4 py-5 sm:p-6  bg-gray-200/100 shadow-md sm:rounded-lg">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {MovieDetails.Title}
                </h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>{MovieDetails.Plot}</p>
                </div>
                <div className="mt-5">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Released
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.Released}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Runtime
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.Runtime}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Genre
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.Genre}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        IMDB Rating
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.imdbRating}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Director(s)
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.Director}
                      </dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">
                        Writer(s)
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.Writer}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        Actors
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.Actors}
                      </dd>
                    </div>
                    <div className="sm:col-span-2">
                      <dt className="text-sm font-medium text-gray-500">
                        Awards
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900">
                        {MovieDetails.Awards}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
