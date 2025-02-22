import React from 'react'
import Slider from "react-slick";


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
      {
        breakpoint: 600,
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
            "We've been using BentoFolio for over a year now, and I must say, it's been a game-changer for us. The user interface is intuitive and the feature",
          rating: 5,
          website: "Framer.com",
        },
        {
          id: 2,
          name: "Oliver Clain",
          position: "Product Designer",
          review:
            "We've been using BentoFolio for over a year now, and I must say, it's been a game-changer for us. The user interface is intuitive and the feature",
          rating: 5,
          website: "Framer.com",
        },
      ];


  return (
    <div>
      <p className="text-center mt-6 font-bold">Trusted By 1200+ Clients</p>
        <div className="slider-container mt-6 mx-9">
          <Slider {...settings} className="space-x-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className=" bg-white dark:bg-gray-900 text-black dark:text-white p-6 rounded-lg space-x-3 mx-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {Array(testimonial.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i} className="text-yellow-500 text-xl">
                          ⭐
                        </span>
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
                <p className="mt-4 text-gray-700">"{testimonial.review}"</p>
                <p className="mt-2 font-bold">
                  {testimonial.name} -{" "}
                  <span className="text-gray-500">{testimonial.position}</span>
                </p>
              </div>
            ))}
          </Slider>
        </div>
    </div>
  )
}

export default Trusted
