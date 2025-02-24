import React from "react";
import notion from "../Pic/notion.svg";
import webflow from "../Pic/webflow.svg";
import mico from "../Pic/mico.svg";
import framer from "../Pic/framer.svg";
import zeplin from "../Pic/zeplin.svg";
import figma from "../Pic/figma.svg";

const brands = [notion, webflow, mico, framer, zeplin, figma];

const Worldwide = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mt-6">
        Working With 50+ Brands ✨ Worldwide
      </h2>
      <div className="mt-4 flex flex-wrap gap-6 justify-center">
        {brands.concat(brands).map((brand, index) => (
          <div
            key={index}
            className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg"
          >
            <img src={brand} alt="Brand Logo" className="w-8 h-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Worldwide;
