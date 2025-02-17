import React from "react";
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
    title:   "Want To Upgrade Your Brain? Stop Doing These 7 Things",
   readTime: "15 min read",
    date: "Nov 6, 2023",
  },
  {
    id: 3,
    img: img8,
    title:"Want To Upgrade Your Brain? Stop Doing These 7 Things",
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
    title:  "Want To Upgrade Your Brain? Stop Doing These 7 Things",
   readTime: "15 min read",
    date: "Nov 6, 2023",
  },
];


const Blog = () => {
  return (
    <div className="Home ml-10 p-16 font-['Bricolage Grotesque', sans-serif]">
      <div className="flex gap-3">
        <CrisRayaan />
        <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-2xl">
          <h1 className="text-3xl md:text-4xl font-bold">
            My Recent Articles & Publications
          </h1>
          <p className="mt-3 text-gray-600">
            I'm here to help if you're searching for a product designer to bring your idea to life or a
            design partner to take your business to the next level.
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
