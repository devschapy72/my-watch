import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((watchItems) => {
        return <Product key={watchItems.id} {...watchItems} />;
      })}
    </div>
  );
};

export default GridView;
