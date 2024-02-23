import React from "react";
import { useProductContext } from "../context/ProductContext";
import Product from "./Product";

const Products = () => {
  const { product } = useProductContext();

  return (
    <div className="w-8/12 xs:w-10/12 sm:w-8/12 md:w-10/12 mx-auto">
      <h2 className="text-center text-3xl font-serif font-bold mb-10">
        OUR ALL <span className="text-red-700">WATCHES</span>
      </h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((watchItems, index) => {
          return <Product key={index} {...watchItems} />;
        })}
      </div>
    </div>
  );
};

export default Products;
