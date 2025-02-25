import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import CrisRayaan from "./CrisRayaan";
import Footer from "./Footer";
import img6 from "../Pic/blog-img-1.jpg";
import img7 from "../Pic/blog-img-2.jpg";
import img8 from "../Pic/blog-img-3.jpg";
import img9 from "../Pic/blog-img-4.jpg";
import img10 from "../Pic/blog-img-5.jpg";
import img11 from "../Pic/blog-img-6.jpg";

const blogPosts = [
  {
    id: 1,
    img: img6,
    title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
    readTime: "15 min read",
    date: "Nov 6, 2023",
  },
  {
    id: 2,
    img: img7,
    title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
    readTime: "15 min read",
    date: "Nov 6, 2023",
  },
  {
    id: 3,
    img: img8,
    title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
    readTime: "15 min read",
    date: "Nov 6, 2023",
  },
  {
    id: 4,
    img: img9,
    title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
    readTime: "15 min read",
    date: "Nov 6, 2023",
  },
  {
    id: 5,
    img: img10,
    title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
    readTime: "15 min read",
    date: "Nov 6, 2023",
  },
  {
    id: 6,
    img: img11,
    title: "Want To Upgrade Your Brain? Stop Doing These 7 Things",
    readTime: "15 min read",
    date: "Nov 6, 2023",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto py-10 font-['Bricolage Grotesque', sans-serif]">
      <div className="flex gap-3">
        <CrisRayaan />
        <div className="w-[870px] p-6 bg-white  text-black  shadow-lg rounded-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            My Recent Articles & Publications
          </h1>
          <p className="mt-3 text-gray-600">
            I'm here to help if you're searching for a product designer to bring
            your idea to life or a design partner to take your business to the
            next level.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="p-3 text-lg">
                <div className="overflow-hidden relative rounded-xl">
                  <img
                    src={post.img}
                    className="h-[220px] w-full object-cover hover:scale-110 transition-transform duration-300 rounded-xl"
                    alt={post.title}
                  />
                </div>
                <h1 className="hover:text-blue-600 mt-3 font-semibold">
                  {post.title}
                </h1>
                <div className="mt-2 text-gray-500 text-sm flex justify-between">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
