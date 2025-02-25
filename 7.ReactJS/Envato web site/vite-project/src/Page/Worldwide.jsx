import React from "react";
import notion from "../Pic/notion.svg";
import webflow from "../Pic/webflow.svg";
import mico from "../Pic/mico.svg";
import framer from "../Pic/framer.svg";
import zeplin from "../Pic/zeplin.svg";
import figma from "../Pic/figma.svg";


const brands = [
  "notion",
  "webflow",
  "mico",
  "framer",
  "zeplin",
  "figma",
];

const Worldwide = () => {
  const brandLogos = [notion, webflow, mico, framer, zeplin, figma];

return (
  <div>
    <h2 className="text-xl font-bold mt-6">Working With 50+ Brands ✨ Worldwide</h2>
    <div className="mt-4 flex flex-wrap gap-4 justify-center">
      {brandLogos.concat(brandLogos).map((logo, index) => (
        <div key={index} className="w-16 h-16 flex items-center justify-center bg-white text-black border rounded-lg">
          <img src={logo} alt={`Brand ${index + 1}`} className="w-8 h-8 inline" />
          {/* <img src={notion} alt="Notion" className="w-8 h-8 inline" /> */}
        </div>
      ))}
    </div>
  </div>
  );
};

export default Worldwide;
