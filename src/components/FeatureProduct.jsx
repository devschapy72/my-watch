import React from "react";
import { NavLink } from "react-router-dom";
import { BsGift } from "react-icons/bs";
import { TfiCheckBox } from "react-icons/tfi";

const FeatureProduct = () => {
  return (
    <div className="bg-gray-700 my-10">
      <div className="w-11/12 lg:w-10/12 mx-auto grid md:grid-cols-2 items-center py-10 gap-8">
        {/* imag_div */}
        <div>
          <figure>
            <img
              src="https://media.istockphoto.com/id/458066987/photo/rolex-deepsea-wristwatch.jpg?s=612x612&w=0&k=20&c=T3frhDuFQw9YvmuPd0GeK_Ka5NlEFlCmqtWrJtI7beA="
              alt="feature watch"
            />
          </figure>
        </div>

        <div>
          <h2 className=" text-lg xs:text-xl sm:text-2xl md:text-3xl font-serif font-bold">
            FEATURE PRODUCT
          </h2>
          <h3 className="text-sm xs:text-lg sm:text-xl md:text-2xl my-3">
            Constantan Chronograph Watches
          </h3>
          <p className="text-xs xs:text-[12px] sm:text-sm md:text-base font-light">
            Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
            nisi. Vestibulum purus Vivamus aliquet elit ac nisl. Suspendisse non
            nisl sit amet velit hendreritrutrum. Sed augue ipsum, egestas nec,
            vestibulum et, malesuada adipiscing, dui. Curabitur
            ullamcorperultricies nisi. Sed aliquam ultrices mauris. Nullam
            cursus lacinia erat.
          </p>
          <div className="my-3 flex justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl text-red-600">
                <TfiCheckBox />
              </span>
              <p className="text-xs sm:text-base md:text-[12px] lg:text-sm">
                {" "}
                Warranty: 2 Year International
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl text-red-600">
                <BsGift />
              </span>
              <p className="text-xs sm:text-base md:text-[12px] lg:text-sm">
                {" "}
                Free Gift Boxes
              </p>
            </div>
          </div>
          <NavLink to="/dslfsdf">
            <button className="mt-5 bg-red-800 px-10 py-3 border-2 border-red-800 hover:bg-transparent duration-300">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
