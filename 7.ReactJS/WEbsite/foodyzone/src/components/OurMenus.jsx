import React from "react";
import ViewHome from "../page/ViewHome"
import SaladsOur from "../page/SaladsOur";
import MainDishesOur from "../page/MainDishesOur";
import NewsletterSignUp from "../page/SignUp";
import Footer from "../page/Footer";
import img_21 from "../pic/A-1.jpg";

const OurMenus = () => {
  return (
    <div className="py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center items-center text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
            Flavour so good you’ll <br /> try to eat with your eyes
          </h1>
        </div>
        <div className="flex justify-center items-center rounded-md mb-10">
          <img src={img_21} alt="" className="w-full rounded-3xl" />
        </div>
        <div className="lg:flex justify-between mt-9 space-y-6 lg:space-y-0">
          <div className="font-bold text-xl lg:text-3xl">
            <p>
              A place where food, <br /> design, and ambiance <br /> come
              together to <br /> create a memorable <br /> experience.
            </p>
          </div>
          <div className="text-lg lg:text-base">
            <p>
              Whether you want to add more plant-based <br /> meals to your diet
              or are simply looking to <br /> change up your salad game, you’ll
              find tons of <br /> inspiration in the salad recipes below.
            </p>
          </div>
        </div>
        <div className="mt-5 flex justify-center lg:justify-start">
          <a href="./componet 2/AboutUS.jsx">
            <button className="px-7 py-3 rounded-full text-black font-bold border-2 border-black hover:scale-105 transition-all hover:border-none hover:text-green-950 hover:bg-yellow-500">
              Learn More
            </button>
          </a>
        </div>
      </div>
      <ViewHome/>
      <SaladsOur />
      <MainDishesOur />
      <NewsletterSignUp />
      <Footer />
    </div>
  );
};

export default OurMenus;
