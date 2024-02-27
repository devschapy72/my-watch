import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItems from "./CartItems";
import { NavLink } from "react-router-dom";
import PriceFormat from "./PriceFormat";

const Cart = () => {
  const { cart, clearAll, total_price, delivery } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="px-5 h-[50vh] flex flex-col justify-center items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-extrabold mb-5 sm:mb-7 md:mb-10">
          Please Add Product
        </h2>
        <NavLink to="/products">
          <button className="bg-red-700 px-10 xs:px-12 sm:px-14 py-3 border-2 border-red-700 hover:bg-transparent duration-300">
            Add Product
          </button>
        </NavLink>
      </div>
    );
  }

  return (
    <div className="w-11/12 sm:w-10/12 lg:w-9/12 mx-auto">
      <div className="grid grid-cols-2">
        <p>Item</p>
        <div className="grid grid-cols-2 md:grid-cols-4 text-center font-serif text-xs sm:text-sm lg:text-base">
          <p className="hidden md:block">Price</p>
          <p>Quantity</p>
          <p className="hidden md:block">Subtotal</p>
          <p>Remove</p>
        </div>
      </div>
      <hr className="my-3" />
      <div>
        {cart.map((itemCart) => {
          return <CartItems key={itemCart.id} {...itemCart} />;
        })}
        <hr className="my-3" />
      </div>

      <div className="flex justify-between">
        <NavLink to="/products">
          <button className="bg-green-500 px-6 xs:px-10 py-2 xs:py-3 border-2 border-green-500 hover:bg-transparent duration-300 text-xs sm:text-sm">
            Go Shopping
          </button>
        </NavLink>
        <button
          className="bg-red-500 px-6 xs:px-10 py-2 xs:py-3 border-2 border-red-500 hover:bg-transparent duration-300 text-xs sm:text-sm"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>

      <div className="flex justify-end mt-10">
        <div className="bg-gray-700 w-[15rem] px-3 py-2">
          <div className="flex justify-between items-center">
            <p className="font-serif font-semibold">Subtotal: </p>
            <p>
              <PriceFormat price={total_price} />
            </p>
          </div>
          <div className="flex justify-between items-center my-2">
            <p className="font-serif font-semibold">Delivery fee: </p>
            <p>
              <PriceFormat price={delivery} />
            </p>
          </div>
          <div className="flex justify-between items-center text-red-500">
            <p className="font-serif font-semibold">Total order: </p>
            <p>
              <PriceFormat price={delivery + total_price} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
