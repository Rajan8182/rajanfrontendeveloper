import React from "react";
import img_22 from "../pic/A_6.jpg";  
import OurStory from "../page/OurStory";
import FoodAbout1 from "../page/FoodAbout1.jsx";
import SignUp from "../page/SignUp";
import Footer from "../page/Footer";

const AboutUS = () => {
  return (
    <div className="py-10 md:py-28">
      <div className="text-3xl md:text-5xl flex justify-center items-center m-9  font-bold">
        <h1>About Us</h1>
      </div>

      <div className="px-6 md:px-36">
        <div className="flex flex-col md:flex-row bg-[#a9c1a9] h-auto md:h-[600px] w-full md:w-auto rounded-xl mb-10">
          <div className="p-6 md:ml-9 md:p-10">
            <p className="text-3xl md:text-5xl mt-8 md:mt-24">Our Mission</p>
            <p className="font-bold text-2xl md:text-4xl mt-8 md:mt-24">
              A meal designed to <br /> be explored and <br /> experienced in
              the <br />
              moment
            </p>
          </div>
          <img src={img_22} className="w-full md:w-[700px] rounded-b-xl md:rounded-r-xl" alt="Our Mission" />
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl mt-12 md:mt-24">
            We make a small, intimate, and inviting <br /> space for an
            unforgettable meal
          </h1>
          <h3 className="mt-6 md:ml-20">
            Convert leads into customers and then turn those customers into loyal fans of your <br />
            brand by leveraging next-generation automation and AI. Yes, it really can be <br />
            automated, and no, you’re not dreaming.
          </h3>
        </div>
      </div>
      <OurStory />
      <FoodAbout1 />
      <SignUp />
      <Footer />
    </div>
  );
};

export default AboutUS;
