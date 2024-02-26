import React from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="w-8/12 xs:w-10/12 sm:w-8/12 md:w-10/12 mx-auto ">
      <h2 className="text-center text-3xl font-serif font-bold mb-10">
        OUR ALL <span className="text-red-700">WATCHES</span>
      </h2>
      <div className="">
        <div className="">
          <FilterSection />
        </div>
        <div className="">
          <div>
            <div className="mb-10">
              <Sort />
            </div>
            <div>
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
