import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Trusted = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "Oliver Clain",
      position: "Product Designer",
      review:
        "We've been using BentoFolio for over a year now, and I must say, it's been a game-changer for us. The user interface is intuitive and the feature set is amazing.",
      rating: 5,
      website: "Framer.com",
    },
    {
      id: 2,
      name: "Sophia Lee",
      position: "UX Researcher",
      review:
        "The customer support is fantastic, and the tools available have greatly improved our workflow. Highly recommended!",
      rating: 5,
      website: "Behance.net",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <p className="text-center mt-6 font-bold text-xl">Trusted By 1200+ Clients</p>
      <div className="slider-container mt-6">
        <Slider {...settings} className="space-x-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white text-black  p-6 rounded-lg mx-4 shadow-lg flex flex-col justify-between min-h-[250px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i} className="text-yellow-500 text-xl">⭐</span>
                    ))}
                </div>
                <a
                  href={`https://${testimonial.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  {testimonial.website} ↗
                </a>
              </div>
              <p className="mt-4 text-black ">"{testimonial.review}"</p>
              <p className="mt-2 font-bold">
                {testimonial.name} - <span className="text-black">{testimonial.position}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Trusted;