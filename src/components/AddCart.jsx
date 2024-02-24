import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, color, stock } = product;
  const [activeColor, setActiveColor] = useState(color[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div>
      <div className="flex items-center gap-2">
        <span>Color:</span>
        {color.map((curColor, index) => {
          return (
            <button
              key={index}
              style={{ backgroundColor: curColor }}
              onClick={() => setActiveColor(curColor)}
              className={
                activeColor === curColor
                  ? "w-5 h-5 rounded-full opacity-100 flex justify-center items-center"
                  : "w-5 h-5 rounded-full opacity-50 hover:opacity-100 duration-300 cursor-pointer flex justify-center items-center"
              }
            >
              {activeColor === curColor ? (
                <FaCheck className="text-gray-400 text-xs" />
              ) : null}
            </button>
          );
        })}
      </div>

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink
        to="/cart"
        onClick={() => addToCart(id, activeColor, amount, product)}
      >
        <button className="mt-5 bg-gray-700 shadow-xl px-10 py-3 border-2 border-gray-700 rounded-md hover:bg-transparent duration-300 text-sm">
          Add Cart
        </button>
      </NavLink>
    </div>
  );
};

export default AddCart;
