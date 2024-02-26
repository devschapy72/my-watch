import React from "react";
import { NavLink } from "react-router-dom";

const TrastedProducts = ({ id, image, company }) => {
  return (
    <NavLink to={`/trasteddetails/${company}`} key={id}>
      <div className="relative">
        <figure>
          <img src={image} alt={company} className="w-full h-40 object-cover" />
        </figure>
        <p className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-[#000000b5] text-md px-2 text-center font-serif font-bold hover:bg-black duration-300">
          {company}
        </p>
      </div>
    </NavLink>
  );
};

export default TrastedProducts;
