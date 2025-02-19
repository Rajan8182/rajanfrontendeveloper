import React from "react";
import img6 from "../Pic/project-1.png";
import img7 from "../Pic/project-2.png";
import img8 from "../Pic/project-3.png";
import CrisRayaan from "./CrisRayaan";
import Footer from "./Footer";

const projects = [
  {
    id: 1,
    title: "FlowSaaS - SaaS Application Tools",
    description: "SaaS App | UI UX Design",
    image: img6,
    link: "#",
  },
  {
    id: 2,
    title: "AiMug - AI Writing Application Tools",
    description: "Product Design | Application",
    image: [img7],
    link: "#",
  },
  {
    id: 3,
    title: "FlowArch - Architecture Service Website",
    description: "UI UX Design | Development",
    image: [img8],
    link: "#",
  },
];

const Works = () => {
  return (
    <div className="container mx-auto py-10 font-['Bricolage Grotesque', sans-serif]">
      <div className="flex  gap-3">
        <CrisRayaan />
        <div className="w-[870px] p-6 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-2xl">
          <section className=" mx-auto">
            <h2 className="font-bold text-gray-800 dark:text-white text-4xl">
              Check Out My Latest{" "}
              <span className="text-blue-600">Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-black my-4 max-w-2xl">

              I'm here to help if you're searching for a product designer to
              bring your idea to life or a <br /> design partner to help take
              your business to the next level.
            </p>

            <div className="gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-lg p-5 hover:shadow-xl transition"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg w-full"
                  />

                  <h3 className="text-xl font-semibold mt-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-500">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-blue-500 font-bold mt-2 inline-block"
                  >
                    Visit Site →
                  </a>
                </div>
              ))}
            </div>
          </section>
          <marquee
            class="marq"
            className="border  flex justify-between  dark:bg-gray-800 text-black dark:text-white bg-gray-100 p-4 font-bold text-4xl hover:bg-white rounded-lg mt-6"
            direction="left"
            loop=""
          >
            <div> 
              <ul className="list-disc flex gap-20" >
              <li className="text-gray-600 dark:text-black">Let's 👋 Work Together</li>
              <li className="text-gray-600 dark:text-black">Let's 👋 Work Together</li>
              </ul>
               </div>
          </marquee>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Works;
