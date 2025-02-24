import React from "react";
import img5 from "../Pic/awwwards1.png";
import adobe from "../Pic/adobe (1).svg";
import dribbble from "../Pic/dribbble.svg";
import behance from "../Pic/behance.svg";

const awards = [
  { img: adobe, title: "Adobe Design Contest", year: "2022-2023", place: "Runner up" },
  { img: dribbble, title: "Dribbble Design Challenge", year: "2021-2022", place: "Winner" },
  { img: img5, title: "Awwwards Recognition", year: "2020", place: "Honorable Mention" },
  { img: behance, title: "Behance UI/UX Challenge", year: "2019-2020", place: "Finalist" },
];

const AwardsandRecognitions = () => {
  return (
    <div className="mt-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen p-5">
      <div className="mt-10">
        <h1 className="text-4xl">Awards and Recognitions</h1>
        <div>
          {awards.map((award, index) => (
            <div
              key={index}
              className="border flex items-center justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-9 rounded-lg mt-6"
            >
              <img src={award.img} alt={award.title} className="w-8 h-8 rounded-lg" />
              <div>
                <h3>{award.title}</h3>
                <h4>{award.year}</h4>
              </div>
              <div>
                <h3>{award.place}</h3>
              </div>
              <div>
                <button>View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsandRecognitions;
