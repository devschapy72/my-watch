import React from "react";
import PriceFormat from "./PriceFormat";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../context/CartContext";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItems = ({ id, image, price, amount, name, activeColor }) => {
  const { setDecrease, setIncrease, removeItems } = useCartContext();
  return (
    <div className="grid grid-cols-2 items-center mb-5">
      <div className="flex items-center gap-2">
        <figure className="">
          <img
            src={image}
            alt={id}
            className="w-[5rem] h-20 object-cover xs:w-[8rem] xs:h-28"
          />
        </figure>
        <div>
          <p className=" hidden xs:block text-[10px] sm:text-sm mb-1">
            Model: {name}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-xs sm:text-sm">Color: </p>
            <div
              style={{ backgroundColor: activeColor, activeColor: activeColor }}
              className="w-3 h-3 rounded-full"
            ></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 items-center ">
        <p className="hidden md:flex justify-center text-sm">
          <PriceFormat price={price} />
        </p>
        <div className="flex justify-center text-xs sm:text-sm">
          <CartAmountToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div>
        <p className="hidden md:flex justify-center text-sm">
          <PriceFormat price={price * amount} />
        </p>
        <p className="flex justify-center text-sm hover:text-red-500 duration-300 cursor-pointer">
          <FaRegTrashCan onClick={() => removeItems(id)} />
        </p>
      </div>
    </div>
  );
};

export default CartItems;
