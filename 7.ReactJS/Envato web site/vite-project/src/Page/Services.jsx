import React from "react";
import CrisRayaan from "./CrisRayaan";
import Worldwide from "./Worldwide";
import Trusted from "./Trusted";
import AwardsandRecognitions from "./AwardsandRecognitions";
import Faqs from "./Faqs";
import img7 from "../Pic/blog-img-1.jpg";
import Footer from "./Footer";

import uiUx from "../Pic/ui-ux.svg";
import camera from "../Pic/camera.svg";
import youtube from "../Pic/youtube.svg";
import webDev from "../Pic/web-development.svg";
import view from "../Pic/view.svg";

const Services = () => {
  return (
    <div className="container mx-auto py-10 font-['Bricolage Grotesque', sans-serif]">
      <div className="flex  gap-3">
        <CrisRayaan />
        <div className="w-[870px] p-6 bg-white  text-black  shadow-lg rounded-2xl">
          <h1 className="text-5xl font-bold">
            Services I <span className="text-blue-500">Offered</span>
          </h1>
          <p className="text-gray-600  text-3xl mt-2">
            Transforming Ideas into Innovative Reality,
            <br />
            Elevate Your Vision with Our Expert{" "}
            <span className="font-bold dark:text-black">
              Product <br />
              Design and Development
            </span>{" "}
            Services!
          </p>
          <div className="flex  flex-col gap-4">
            <div className="flex   gap-4 gap-y-3 mt-10">
              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={uiUx} alt="UI UX Design" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> UI UX Design </h3>
                </div>
              </div>
              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={uiUx} alt="Mobile App" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> Mobile App </h3>
                </div>
              </div>
              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={uiUx} alt="Product Design" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> Product Design </h3>
                </div>
              </div>
              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={uiUx} alt="Branding" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> Branding </h3>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={camera} alt="Photography" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> Photography </h3>
                </div>
              </div>

              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={youtube} alt="Motion Design" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> Motion Design </h3>
                </div>
              </div>

              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={webDev} alt="Web Development" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> Web Development </h3>
                </div>
              </div>

              <div className="border bg-white  text-black  p-4 rounded-lg text-center">
                <div className="rounded-lg p-4 text-center">
                  <img src={view} alt="Visualization" className="w-40 h-20 bg-white rounded-lg inline" />
                  <h3 className="mt-9"> Visualization </h3>
                </div>
              </div>
            </div>
            <div>
              <img src={img7} alt="Service" className="bg-white shadow-md rounded-lg inline" />
            </div>
            <Worldwide />
            <Trusted />
            <AwardsandRecognitions />
            <Faqs />
            <marquee className="flex justify-between border rounded-xl  text-black  bg-gray-100 p-4 font-bold text-4xl hover:bg-white" direction="left">
              <div>
                <ul className="list-disc flex gap-20">
                  <li className="text-gray-600 dark:text-black">Let's 👋 Work Together</li>
                  <li className="text-gray-600 dark:text-black">Let's 👋 Work Together</li>
                </ul>
              </div>
            </marquee>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
