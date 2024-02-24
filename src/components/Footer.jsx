import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-16 bg-gray-700 flex justify-center items-center">
      <p className="text-xs xs:text-sm">
        Copyright © {new Date().getFullYear()} - All right reserved by SUMON
      </p>
    </div>
  );
};

export default Footer;
