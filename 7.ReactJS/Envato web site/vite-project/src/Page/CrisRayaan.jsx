import React from "react";
import { FaFacebook, FaPinterest, FaGithub, FaYoutube } from "react-icons/fa";
import img1 from "../Pic/1.png";

const CrisRayaan = () => {
  return (
    <div className="sticky top-28 bg-white  text-black shadow-lg p-6 w-full sm:w-[400px] h-[700px] rounded-2xl flex flex-col items-center">
      <div className="bg-slate-300 w-[320px] rounded-xl">
        <img src={img1} alt="Profile" className="h-[310px] w-[230px] block mx-auto" />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold mt-8">Cris Rayaan 👋</h2>
        <p className="text-gray-700  mt-6">
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
      <div className="flex items-center mt-8 gap-4">
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
  );
};

export default CrisRayaan;
