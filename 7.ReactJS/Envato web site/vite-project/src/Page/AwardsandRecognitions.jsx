import React from "react";
import img5 from "../Pic/awwwards1.png";

const AwardsandRecognitions = () => {
  return (
    <div className="mt-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen p-5">
      <div className="mt-10">
        <h1 className="text-4xl">Awards and Recognitions</h1>

        <div>
          <div className="border flex items-center justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-white p-9 rounded-lg mt-6">
            <img
              src={require("../Pic/adobe (1).svg").default}
              alt="Adobe"
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <h3>Adobe Design Contest</h3>
              <h4>2022-2023</h4>
            </div>
            <div>
              <h3>Runner up</h3>
            </div>
            <div>
              <button> view Project </button>
            </div>
          </div>
          <div className="border flex items-center justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-white p-9 rounded-lg mt-6">
            <img
              src={require("../Pic/dribbble.svg").default}
              alt="Adobe"
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <h3>Adobe Design Contest</h3>
              <h4>2022-2023</h4>
            </div>
            <div>
              <h3>Runner up</h3>
            </div>
            <div>
              <button> view Project </button>
            </div>
          </div>
          <div className="border flex items-center justify-between  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-white p-9 rounded-lg mt-6">
            <img src={img5} alt="Adobe" className="w-8 h-8 rounded-lg" />
            <div>
              <h3>Adobe Design Contest</h3>
              <h4>2022-2023</h4>
            </div>
            <div>
              <h3>Runner up</h3>
            </div>
            <div>
              <button> view Project </button>
            </div>
          </div>
          <div className="border flex items-center justify-between  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-white p-9 rounded-lg mt-6">
            <img
              src={require("../Pic/behance.svg").default}
              alt="Adobe"
              className="w-8 h-8 rounded-lg"
            />
            <div>
              <h3>Adobe Design Contest</h3>
              <h4>2022-2023</h4>
            </div>
            <div>
              <h3>Runner up</h3>
            </div>
            <div>
              <button> view Project </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardsandRecognitions;
