import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="relative">
        <video
          src="https://content.rolex.com/v7/dam/homepage/homepage-stacker/watchmaking/features/triplock-winding-crown/homepage-watchmaking-case-triplock-winding-crown-video-autoplay.mp4"
          autoPlay="autoPlay"
          loop
          muted
          className="-translate-y-[3.9%] mb-10"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center">
          <h4 className="uppercase font-serif font-extrabold text-base xs:text-xl sm:text-2xl">
            triplock
          </h4>
          <h2 className="uppercase font-serif font-extrabold text-lg xs:xl sm:text-2xl md:text-4xl my-2 xs:my-3">
            the power of three
          </h2>
          <NavLink to="/products">
            <button className="border-[2px] sm:border-[4px] px-7 xs:px-8 sm:px-10 md:px-12 xs-py-1 xs:py-1 sm:py-3 rounded-full mt-2 sm:mt-4 text-lg sm:text-xl font-serif font-extrabold hover:bg-white hover:text-black duration-300">
              Order Now
            </button>
          </NavLink>
        </div>
      </div>

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
    </div>
  );
};

export default About;
