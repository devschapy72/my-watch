import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const Stars = ({ stars }) => {
  const ratingStars = Array.from({ length: 5 }, (elm, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <IoIosStar />
        ) : stars >= number ? (
          <IoIosStarHalf />
        ) : (
          <IoIosStarOutline />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center gap-2 my-3">
      Rating:
      <span className="flex items-center text-orange-400">{ratingStars}</span>
    </div>
  );
};

export default Stars;
