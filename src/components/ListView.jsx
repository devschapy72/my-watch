import React from "react";
import PriceFormat from "./PriceFormat";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className="w-full md:w-9/12 lg:w-8/12 mx-auto">
      {products.map((watchItems) => {
        const { id, image, name, company, price } = watchItems;
        return (
          <div className="border-2 block xs:flex justify-between px-3 sm:px-5 md:px-10 py-5 mb-8 items-center gap-4 sm:gap-6 md:gap-10">
            <figure>
              <img
                src={image}
                alt={name}
                className="h-36 w-[15rem] object-cover text-center"
              />
            </figure>
            <div className="text-center mt-3 xs:text-start xs:mt-0">
              <p className="text-base sm:text-lg md:text-xl font-serif">
                Brand: {company}
              </p>
              <p className="my-1 sm:my-2 md:my-3 text-sm sm:text-base md:text-lg font-mono">
                Model: {name}
              </p>
              <p className="mb-3 text-lg text-blue-600 font-bold font-mono">
                {" "}
                Price:
                <PriceFormat price={price} />
              </p>
              <NavLink to={`/details/${id}`}>
                <button className="bg-red-700 mb-2 px-12 py-3 text-sm hover:bg-red-800 duration-300">
                  Details
                </button>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
