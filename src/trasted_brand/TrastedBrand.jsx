import React from "react";
import TrastedData from "./TrastedData";
import TrastedProducts from "./TrastedProducts";

const TrastedBrand = () => {
  return (
    <div className="w-8/12 xs:w-10/12 sm:w-8/12 md:w-10/12 lg:w-8/12 mx-auto">
      <h3 className="text-center font-serif font-bold my-5 sm:mb-7 md:mb-10 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        OUR TRUSTED BRANDS
      </h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 justify-center gap-4 sm:gap-6 md:gap-8">
        {TrastedData.map((companyName, index) => {
          return <TrastedProducts key={index} {...companyName} />;
        })}
      </div>
    </div>
  );
};

export default TrastedBrand;
