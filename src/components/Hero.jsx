import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" relative">
      <video
        src="https://content.rolex.com/v7/dam/homepage/homepage-stacker/collection/professional-watches/submariner/flagship/homepage-collection-professional-watches-submariner-flagship-autoplay.mp4"
        type="video/mp4"
        autoPlay="autoPlay"
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0  flex flex-col items-center sm:items-start justify-center sm:pl-36">
        <p className="text-xs xs:text-sm sm:text-md font-serif ">
          TIMELESS & ELEGANT
        </p>
        <h1 className="text-lg xs:text-2xl ms:text-3xl md:text-5xl font-serif my-1 xs:my-2 sm:my-3 font-extrabold ">
          BEST SELLER
        </h1>
        <p className="text-[10px] xs:text-[11px] sm:text-sm font-light mb-5 sm:mb-7 md:mb-10 ">
          Complete your everyday look with a classic leather strap watch.
        </p>
        <NavLink to="products">
          <button className="bg-[#e74c3c] border-2 border-[#e74c3c] px-6 sm:px-10 py-2 sm:py-3 text-sm sm:text-base lg:text-md font-serif hover:bg-transparent duration-300">
            Shop now
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
