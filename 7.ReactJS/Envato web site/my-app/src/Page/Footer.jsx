import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center bg-white dark:bg-gray-800 text-black dark:text-white justify-center py-4 mt-11">
      <h1 className="text-sm  md:text-base text-gray-600">
        © BentoFolio 2024, Design by{" "}
        <span className="text-blue-500 hover:text-blue-700 transition">
          MarvelTheme
        </span>
      </h1>
    </div>
  );
};

export default Footer;
