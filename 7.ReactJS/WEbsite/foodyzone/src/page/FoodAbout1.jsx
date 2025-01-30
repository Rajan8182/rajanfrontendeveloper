import React from "react";
import img_23 from "../pic/f-1.jpg";
import img_24 from "../pic/f-2.jpg";
import img_25 from "../pic/f-3.jpg";

const FoodAbout1 = () => {
  return (
    <div className="py-12">
      <div className="flex flex-wrap justify-center gap-10">
        {/* Food Sourcing */}
        <div className="relative w-full sm:w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <img className="border-none object-cover w-full h-full" src={img_23} />
          <div className="absolute bottom-6 left-3 text-center text-2xl md:text-3xl font-bold text-white">
            Food Sourcing
          </div>
        </div>

        {/* Menu Development */}
        <div className="relative w-full sm:w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <img className="border-none object-cover w-full h-full" src={img_24} />
          <div className="absolute bottom-6 left-3 text-center text-2xl md:text-3xl font-bold text-white">
            Menu Development
          </div>
        </div>

        {/* Restaurant */}
        <div className="relative w-full sm:w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <img className="border-none object-cover w-full h-full" src={img_25} />
          <div className="absolute bottom-6 left-3 text-center text-2xl md:text-3xl font-bold text-white">
            Restaurant
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodAbout1;
