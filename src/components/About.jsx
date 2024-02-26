import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="w-10/12 xs:w-8/12 md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <figure>
        <img
          src="https://static-01.daraz.com.bd/p/c7848f8b648843d17d903866506e238f.jpg_750x750.jpg_.webp"
          alt=""
        />
      </figure>
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2">
          Dream Watch
        </h2>
        <p className="text-xs xs:text-sm font-light mb-10">
          Discover elegance in every tick with our timeless watches.
          Meticulously crafted, seamlessly blending classic aesthetics and
          cutting-edge technology. Elevate your style, embrace precision.
        </p>
        <NavLink to="/efsf">
          <button className="bg-red-600 px-7 sm:px-10 py-3 border-2 border-red-600 hover:bg-transparent duration-300">
            Explore More
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default About;
