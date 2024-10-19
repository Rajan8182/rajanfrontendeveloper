import React from "react";
import img_20 from "../pic/asset_5.jpeg";

const OurStory = () => {
  return (
    <div className="p-28">
      <div className="flex bg-[#e8dcc6] h-[600px] w-[9px00] rounded-xl  bottom-10">
        <img src={img_20} className="w-[600px] rounded-l-xl" alt="" />
        <div className="ml-9 p-10">
          <p className="text-5xl mt-10">Our Story</p>
          <br />
          <p className="font-bold mt-72 text-4xl">
            We’re not just a <br /> restaurant. We’re a <br /> cultural
            experience
          </p>
        </div>
      </div>
      <p className="font-bold mt-10 text-3xl ml-28">Immerse yourself in an experience that <br /> transcends the ordinary</p>
      <p className="ml-44 mt-9">In a world where the long- and short-term effects of climate change pose major <br /> challenges for farmers, the need for regenerative food systems has never been more <br /> important. That’s why we’ve made a promise to do more for the planet, by taking less. <br /> Our plant-forward menu means that we’re already on average 30% less carbon <br /> intensive than the average American meal.</p>
    </div>
  );
};

export default OurStory;
