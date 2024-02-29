import React, { useEffect } from "react";
import PriceFormat from "../components/PriceFormat";
import { NavLink } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const TrastedProduct = ({ id, image, name, company, price }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="bg-gray-700 shadow-xl"
      data-aos="flip-left"
      data-aos-duration="2000"
    >
      <figure>
        <img src={image} alt={name} className="w-full h-44 object-cover" />
      </figure>
      <div className="mt-5 flex flex-col justify-end items-center px-3 text-sm font-serif">
        <p className="text-xs sm:text-sm">Brand: {company}</p>
        <p className="my-2 text-gray-400 text-xs sm:text-sm">Model: {name}</p>
        <p className="mb-3">
          Price: <PriceFormat price={price} />
        </p>
        <NavLink to={`/details/${id}`}>
          <button className="bg-red-700 mb-2 px-12 py-3 text-sm hover:bg-red-800 duration-300">
            Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default TrastedProduct;
