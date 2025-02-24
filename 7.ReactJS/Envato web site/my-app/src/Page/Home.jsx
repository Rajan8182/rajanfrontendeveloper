import React from "react";
import WorksExperience from "./WorksExperience";
import Footer from "./Footer";
import { FaFacebook, FaPinterest, FaGithub, FaYoutube } from "react-icons/fa";
import img1 from "../Pic/1.png";
import img6 from "../Pic/project-1.png";
import img7 from "../Pic/project-2.png";

const Home = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex gap-3 justify-center">
      <div className=" bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 w-full sm:w-[400px] h-[690px] rounded-2xl flex flex-col items-center">
      <div className="bg-slate-300 w-[320px] rounded-xl">
        <img src={img1} alt="Profile" className="h-[310px] w-[230px] block mx-auto" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mt-8">Cris Rayaan 👋</h2>
        <p className="text-gray-700 dark:text-white mt-6">
          A Passionate <b>Full Stack Developer</b> 💻 & Product Designer having
          12 years of experience worldwide.
        </p>
      </div>
      <div className="flex gap-4 mt-8 justify-center">
        <button className="bg-blue-600 text-white p-2  rounded-lg">
          📞 Book a Call
        </button>
        <button className="border p-2 rounded-lg">📩 Copy Email</button>
      </div>
      <div className="flex items-center dark:text-white mt-8 gap-4">
        {[FaFacebook, FaPinterest, FaGithub, FaYoutube].map((Icon, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg p-3 flex items-center justify-center transition duration-300"
          >
            <Icon className="text-gray-700 text-xl" />
          </div>
        ))}
      </div>
    </div>
        <WorksExperience />

        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg p-6 w-full sm:w-[400px] h-[690px] rounded-2xl">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Recent Projects</h2>
            <button className="text-blue-700">All Projects</button>
          </div>
          <div className="m-4 mt-20 flex justify-center">
            <img src={img6} alt="Project 1" className="rounded-lg shadow-md" />
          </div>
          <div className="m-4 mt-20 flex justify-center">
            <img src={img7} alt="Project 2" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap  lg:flex-nowrap gap-3 justify-center mt-3">
        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md p-6 rounded-2xl w-full lg:w-[860px]">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold">Services I Offer</h2>
            <button className="text-blue-700">See All Services</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {["UI UX Design", "Mobile App", "Product Design", "Branding"].map(
              (service, idx) => (
                <div
                  key={idx}
                  className="border bg-slate-300 dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg text-center"
                >
                  <img
                    src={require("../Pic/ui-ux.svg").default}
                    alt={service}
                    className="w-32 h-20 bg-white shadow-md rounded-lg mx-auto"
                  />
                  <h3 className="mt-4 dark:text-white text-gray-800">
                    {service}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-md p-6 rounded-2xl w-full sm:w-[400px]">
          <marquee className="border bg-white dark:bg-gray-800 text-black dark:text-white  p-3 hover:bg-white rounded-lg">
            🚀 Available For Hire | Crafting Digital Experiences 🎨
          </marquee>
          <div className="text-4xl font-bold mt-10">
            <h1>
              Let's👋 <br />
              Work Together
            </h1>
          </div>
          <button className="mt-8 text-blue-700">Let's Talk</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
