import React from "react";
import Slider from "react-slick";
import img_15 from "../pic/magic_1.jpg";
import img_16 from "../pic/A_2.jpg";
import img_17 from "../pic/A_3.jpg";
import img_18 from "../pic/A_4.jpg";
import img_19 from "../pic/A_5.jpg";

function Highlight() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="slider-container bg-green-50 m-8 md:m-28 rounded-2xl">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="py-10 px-4 lg:px-20">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h4 className="text-black font-bold">Highlight</h4>
              <h2 className="text-4xl font-bold mb-4">The magic of the kitchen</h2>
              <p className="text-lg">
                On cold winter nights, I like to brighten up our dinner table
                with a big, colorful mix of root veggies and hearty greens. On
                beautiful, warm days.
              </p>
            </div>

            {/* Image Section */}
            <div className="grid md:grid-cols-2 gap-4">
              <img
                src={img_15}
                alt="Salad Bowl"
                className="rounded-lg w-full h-auto"
              />
              <div className="grid grid-rows-2 gap-4">
                <img
                  src={img_16}
                  alt="Salad Dish"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
                <img
                  src={img_17}
                  alt="Another Salad"
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="py-10 px-4 lg:px-20">
          <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Text Section */}
            <div className="flex flex-col justify-center">
              <h4 className="text-black font-bold">Our Values</h4>
              <h2 className="text-4xl font-bold mb-4">Delicious food with meaning</h2>
              <p className="text-lg text-black">
                Salad recipes are my favorite way to showcase vibrant, in-season produce – fruits and veggies that are so good on their own that you don’t need to do much to make them.
              </p>
            </div>

            {/* Image Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img
                src={img_18}
                alt="Salad Bowl"
                className="rounded-lg w-full h-full object-cover"
              />
              <img
                src={img_19}
                alt="Salad Bowl"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Highlight;
