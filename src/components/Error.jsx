import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-10/12 mx-auto text-center flex flex-col justify-center items-center h-[50vh]">
      <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-yellow-400 mb-10">
        "Oops! Something went wrong. Please try again later."
      </p>
      <NavLink to="/">
        <button className="bg-gray-600 px-12 py-3 border-2 border-gray-600 hover:bg-transparent duration-300">
          Go back
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
