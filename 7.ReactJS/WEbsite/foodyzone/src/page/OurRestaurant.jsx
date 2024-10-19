import React from "react";
import img_5 from "../pic/asset_4.jpeg";

const OurRestaurant = () => {
  return (
    <div>
      <div className="mt-8 p-24 relative">
        <img
          className="border-none w-screen h-screen rounded-2xl"
          src={img_5}
        />
        <div className="absolute top-40 left-44">
          <h1 className=" font-bold text-white text-2xl">Our Restaurant</h1>
          <h1 className="font-bold text-white text-5xl mb-3">A culinary  <br /> adventure for all <br /> the senses</h1>
         <a href="./componet 2/AboutUS.jsx"> <button className="bottom-9  left-36 px-7 py-4 rounded-full bg-yellow-300 text-green-950  hover:scale-80 font-bold">
Learn More
</button></a>
        </div>
      </div>
    </div>
  );
};

export default OurRestaurant;
