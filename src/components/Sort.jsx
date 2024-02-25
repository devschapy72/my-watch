import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/FilterContext";

const Sort = () => {
  const { filterProducts, gridView, setGridView, setListView } =
    useFilterContext();
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
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
        <h1>select price</h1>
      </div>
    </div>
  );
};

export default Sort;
