import React from "react";
import PriceFormat from "./PriceFormat";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div>
      {products.map((watchItems) => {
        const { id, image, name, company, price } = watchItems;
        return (
          <div className="border-2 flex justify-between px-10 py-5 mb-8 items-center">
            <figure>
              <img
                src={image}
                alt={name}
                className="h-36 w-[15rem] object-cover"
              />
            </figure>
            <div>
              <p className="text-xl font-serif">Brand: {company}</p>
              <p className="my-3 text-lg font-mono">Model: {name}</p>
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
