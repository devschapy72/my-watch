import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Login from "./Login";

const Header = () => {
  return (
    <div className="w-full h-16 shadow-lg flex justify-between items-center px-8 sm:px-14 md:px-16 lg:px-10 xl:px-16 z-30">
      <div className="flex items-center gap-2">
        <Link to="/">
          <figure className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14  rounded-full overflow-hidden">
            <img
              src="https://seeklogo.com/images/W/Watch_Your_Watches-logo-B511B54337-seeklogo.com.png"
              alt="watch logo"
              className="object-cover"
            />
          </figure>
        </Link>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold">
          WATC<span className="text-red-800">HES</span>
        </h3>
      </div>
      <NavBar />
      <div className="hidden lg:block">
        <Login />
      </div>
    </div>
  );
};

export default Header;
