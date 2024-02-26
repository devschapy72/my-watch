import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { filterProducts, gridView, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <div className="flex flex-wrap gap-5 justify-between items-center">
      <div className="flex items-center gap-5">
        <button
          onClick={setGridView}
          className={
            gridView
              ? "bg-[#fd4242] px-1 py-1 text-lg"
              : "bg-[#4c4949] px-1 py-1 text-lg"
          }
        >
          {" "}
          <BsFillGridFill />
        </button>
        <button
          onClick={setListView}
          className={
            gridView
              ? "bg-[#4c4949] px-1 py-1 text-lg"
              : "bg-[#fd4242] px-1 py-1 text-lg"
          }
        >
          <BsList />{" "}
        </button>
      </div>
      <div>
        <p className="font-semibold text-md">
          {filterProducts.length}{" "}
          <span className="font-serif">Available Product</span>
        </p>
      </div>
      <div>
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="bg-transparent border-2"
            onClick={sorting}
          >
            <option className="bg-gray-800">Select(price)</option>
            <option value="lowest" className="bg-gray-800">
              Price(lowest)
            </option>
            <option value="highest" className="bg-gray-800">
              Price(highest)
            </option>
            <option value="a-z" className="bg-gray-800">
              Price(a-z)
            </option>
            <option value="z-a" className="bg-gray-800">
              Price(z-a)
            </option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
