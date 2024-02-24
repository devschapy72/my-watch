import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex items-center my-5 gap-3">
      <button onClick={setDecrease} className="hover:text-red-500 duration-300">
        <FaMinus />
      </button>
      <p>{amount}</p>
      <button
        onClick={setIncrease}
        className="hover:text-green-500 duration-300"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
