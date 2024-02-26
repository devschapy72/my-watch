import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="-translate-y-[3.9%] relative">
      <figure>
        <img
          src="https://images8.alphacoders.com/463/463381.jpg"
          alt="hero image"
        />
      </figure>
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center sm:items-start justify-center bg-[#0e0e0ebb] sm:pl-36">
        <p className="text-xs xs:text-sm sm:text-md font-serif">
          TIMELESS & ELEGANT
        </p>
        <h1 className="text-lg xs:text-2xl ms:text-3xl md:text-5xl font-serif my-1 xs:my-2 sm:my-3 font-extrabold">
          BEST SELLER
        </h1>
        <p className="text-[10px] xs:text-[11px] sm:text-sm font-light mb-5 sm:mb-7 md:mb-10">
          Complete your everyday look with a classic leather strap watch.
        </p>
        <NavLink to="products">
          <button className="bg-[#e74c3c] px-6 sm:px-10 py-2 sm:py-3 text-sm sm:text-base lg:text-md border-2 border-[#e74c3c] hover:bg-transparent duration-300 font-serif">
            Shop now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
