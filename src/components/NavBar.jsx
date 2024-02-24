import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { useCartContext } from "../context/CartContext";

const NavBar = () => {
  const { total_items } = useCartContext();
  const [openSlider, setOpenSlider] = useState(false);
  const openBar = () => {
    setOpenSlider(!openSlider);
  };
  const closeBar = () => {
    setOpenSlider(!openSlider);
  };
  return (
    <nav>
      <ul className="hidden lg:flex items-center gap-10 text-sm font-serif">
        <li>
          <NavLink
            to="/"
            className="active-nav hover:text-red-600 hover:underline duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="active-nav hover:text-red-600 hover:underline duration-300"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="active-nav hover:text-red-600 hover:underline duration-300"
          >
            All Watch
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="active-nav hover:text-red-600 hover:underline duration-300"
          >
            Contact
          </NavLink>
        </li>

        <NavLink
          to="/cart"
          className="active-nav hover:text-red-600 hover:underline duration-300"
        >
          <div className="relative">
            <span className="text-3xl">
              <BsCart4 />
            </span>
            <p className="absolute top-0 -right-1.5 bg-blue-500 text-white w-5 h-5 rounded-full text-center">
              {total_items}
            </p>
          </div>
        </NavLink>
      </ul>

      {/* opern_bar */}
      <button className="lg:hidden text-2xl" onClick={openBar}>
        {" "}
        <GiHamburgerMenu />
      </button>

      {/* MOBILE_NAV_BAR */}
      <ul
        className="lg:hidden fixed top-0 left-0 w-[100%] sm:w-[60%] bg-gray-700 shadow-xl h-screen  text-md font-serif duration-300"
        style={{ left: openSlider ? 0 : "-100%" }}
      >
        <div className="flex justify-between items-center w-full h-16 shadow-xl px-5">
          <figure>
            <img
              src="https://seeklogo.com/images/W/Watch_Your_Watches-logo-B511B54337-seeklogo.com.png"
              alt="watch logo"
              className="h-10"
            />
          </figure>
          {/* close_bar */}
          <button
            className="w-8 h-8 border-2 flex justify-center items-center text-2xl"
            onClick={closeBar}
          >
            <IoCloseSharp />
          </button>
        </div>

        <div className="mt-10">
          <hr className="border-gray-600 border-[2px] my-3" />
          <li className="pl-5">
            <NavLink
              to="/"
              onClick={closeBar}
              className="active-nav hover:text-red-600 hover:underline duration-300"
            >
              Home
            </NavLink>
          </li>
          <hr className="border-gray-600 border-[2px] my-3" />
          <li className="pl-5">
            <NavLink
              to="/about"
              onClick={closeBar}
              className="active-nav hover:text-red-600 hover:underline duration-300"
            >
              About
            </NavLink>
          </li>
          <hr className="border-gray-600 border-[2px] my-3" />
          <li className="pl-5">
            <NavLink
              to="/products"
              onClick={closeBar}
              className="active-nav hover:text-red-600 hover:underline duration-300"
            >
              All Watch
            </NavLink>
          </li>
          <hr className="border-gray-600 border-[2px] my-3" />
          <li className="pl-5">
            <NavLink
              to="/contact"
              onClick={closeBar}
              className="active-nav hover:text-red-600 hover:underline duration-300"
            >
              Contact
            </NavLink>
          </li>
          <hr className="border-gray-600 border-[2px] my-3" />
          <li>
            <NavLink
              to="/cart"
              onClick={closeBar}
              className="active-nav hover:text-red-600 hover:underline duration-300"
            >
              <div className="relative pl-5">
                <span className="text-3xl">
                  <BsCart4 />
                </span>
                <p className="absolute top-0 left-8 text-white flex justify-center items-center bg-blue-500 w-5 h-5 rounded-full text-center">
                  {total_items}
                </p>
              </div>
            </NavLink>
          </li>

          <hr className="border-gray-600 border-[2px] my-3" />
          <li className="pl-5" onClick={closeBar}>
            Login
          </li>
          <hr className="border-gray-600 border-[2px] my-3" />
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
