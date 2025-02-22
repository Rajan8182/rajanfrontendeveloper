import React from "react";
import Slider from "react-slick";
import img6 from "../Pic/blog-img-1.jpg";
import img7 from "../Pic/blog-img-2.jpg";
import img8 from "../Pic/blog-img-3.jpg";

const ArticleandPublications = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const articles = [
    { id: 1, img: img6, title: "Want To Upgrade Your Brain? Stop Doing These 7 Things", time: "15 min read", date: "Nov 6, 2023" },
    { id: 2, img: img7, title: "The Future of AI in Web Development", time: "12 min read", date: "Dec 10, 2023" },
    { id: 3, img: img8, title: "10 Design Trends You Should Follow in 2024", time: "10 min read", date: "Jan 5, 2024" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-16 mt-9 bg-white dark:bg-gray-800 text-black dark:text-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Articles & Publications</h1>
      <Slider {...settings}>
        {articles.map((article) => (
          <div key={article.id} className="p-3">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={article.img}
                className="h-[250px] w-full object-cover rounded-3xl transition-transform duration-500 hover:scale-105"
                alt={article.title}
              />
            </div>
            <div className="text-left mt-3">
              <h1 className="text-lg sm:text-xl md:text-2xl hover:text-blue-600 font-semibold">{article.title}</h1>
              <div className="mt-3 text-gray-400 dark:text-gray-300 text-sm flex justify-between">
                <span>{article.time}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticleandPublications;
