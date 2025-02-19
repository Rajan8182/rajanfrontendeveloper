import React from "react";
import CrisRayaan from "./CrisRayaan";
import Worldwide from "./Worldwide";
import Trusted from "./Trusted";
import AwardsandRecognitions from "./AwardsandRecognitions";
import ArticleandPublications from "./ArticleandPublications";
import Footer from "./Footer";

const About = () => {
  return (
    // <div className="container mx-auto py-10">
    <div className="container mx-auto py-10 font-['Bricolage Grotesque', sans-serif]">
      <div className="flex  gap-3">
        <CrisRayaan />
        <div className="w-[870px]  p-6 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-bricolage">
            Hi, This Is <span className="text-blue-500">Cris Rayaan</span> 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl mt-2">
            A Passionate <span className="font-bold">Full Stack Developer</span>{" "}
            💻 & <br />
            <span className="font-bold">Product Designer</span> with{" "}
            <span className="font-bold">12 years</span> of experience across{" "}
            <br />
            <span className="font-bold">24+ countries</span> worldwide.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div>
              <span className="text-2xl font-bold">40+</span>
              <p className="text-gray-500 dark:text-gray-400">
                Years of Experience
              </p>
            </div>
            <div>
              <span className="text-2xl font-bold">86+</span>
              <p className="text-gray-500 dark:text-gray-400">
                Projects Completed
              </p>
            </div>
            <div>
              <span className="text-2xl font-bold">72+</span>
              <p className="text-gray-500 dark:text-gray-400">Happy Clients</p>
            </div>
          </div>

          <Worldwide />
          <Trusted />
          <AwardsandRecognitions />
          <ArticleandPublications />

          <marquee
            className="border flex justify-between bg-gray-100 dark:bg-gray-700 p-4 font-bold text-lg sm:text-2xl md:text-4xl hover:bg-white dark:hover:bg-gray-600 rounded-lg mt-6"
            direction="left"
          >
            <ul className="list-disc flex gap-10 sm:gap-20">
              <li>Let's 👋 Work Together</li>
              <li>Let's 👋 Work Together</li>
            </ul>
          </marquee>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
