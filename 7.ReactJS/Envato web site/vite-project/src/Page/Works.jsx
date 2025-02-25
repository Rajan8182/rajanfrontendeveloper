import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
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
        <div className="w-[870px] p-6 bg-white  text-black  shadow-lg rounded-2xl">
          <section className=" mx-auto">
            <h2 className="font-bold text-gray-800  text-4xl">
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
                  className="bg-white  text-black  shadow-lg rounded-lg p-5 hover:shadow-xl transition"
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
            <div className="text-center mt-4">
              <nav
                aria-label="Pagination"
                className="isolate inline-flex -space-x-px rounded-md shadow-xs"
              >
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon aria-hidden="true" className="size-5" />
                </a>

                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon aria-hidden="true" className="size-5" />
                </a>
              </nav>
            </div>
          </section>
          <marquee
            class="marq"
            className="border  flex justify-between   text-black  bg-gray-100 p-4 font-bold text-4xl hover:bg-white rounded-lg mt-6"
            direction="left"
            loop=""
          >
            <div>
              <ul className="list-disc flex gap-20">
                <li className="text-gray-600 dark:text-black">
                  Let's 👋 Work Together
                </li>
                <li className="text-gray-600 dark:text-black">
                  Let's 👋 Work Together
                </li>
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
