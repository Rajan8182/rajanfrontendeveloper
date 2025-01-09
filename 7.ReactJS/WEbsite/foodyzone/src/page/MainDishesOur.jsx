import React from "react";
import FoodExperience from "./FoodExperience";
import Slider from "react-slick";
import img_4 from "../pic/B_1.jpg";
import img_5 from "../pic/B_2.jpg";
import img_6 from "../pic/B_3.jpg";
import img_7 from "../pic/B_4.jpg";
import img_8 from "../pic/B_5.jpg";

function MainDishesOur() {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="p-20">
      <div className="flex justify-between">
        <h1 className="text-black font-bold text-5xl">Salads</h1>
      </div>

      <div className="slider-container mt-9">
        <Slider {...settings}>
          {/* 1 */}
          <div className="w-48 h-64 px-4">
            <img src={img_4} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 className="font-bold">Easy Pasta Salad</h3>
              <h4 className="mt-2">
                Goat cheese, roasted almonds, warm wild rice, shredded kale,
                vinaigrette
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 className="font-bold text-green-950">
                  <span className="">Small</span>
                  <span className="">$11.0</span>
                </h5>
                <h5 className="font-bold text-green-950">
                  <span className="">Large</span>
                  <span className="">$16.0</span>
                </h5>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="w-48 h-64 px-4">
            <img src={img_5} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 className="font-bold">Creamy Vegan Salad</h3>
              <h4 className="mt-2">
                Roasted sweet potatoes, apples, cheese, kale, balsamic
                vinaigrette
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 className="font-bold text-green-950">
                  <span className="">Small</span>
                  <span className="">$9.0</span>
                </h5>
                <h5 className="font-bold text-green-950">
                  <span className="">Large</span>
                  <span className="">$13.0</span>
                </h5>
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="w-48 h-full px-4">
            <img src={img_6} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 className="font-bold">Guacamole Greens</h3>
              <h4 className="mt-2">
                Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 className="font-bold text-green-950">
                  <span className="">Small</span>
                  <span className="">$8.0</span>
                </h5>
                <h5 className="font-bold text-green-950">
                  <span className="">Large</span>
                  <span className="">$12.0</span>
                </h5>
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="w-48 h-64 px-4">
            <img src={img_7} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 className="font-bold">Harvest Bowl</h3>
              <h4 className="mt-2">
                Roasted chicken, roasted sweet potatoes, apples, goat chees
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 className="font-bold text-green-950">
                  <span className="">Small</span>
                  <span className="">$7.0</span>
                </h5>
                <h5 className="font-bold text-green-950">
                  <span className="">Large</span>
                  <span className="">$10.0</span>
                </h5>
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="w-48 h-64 px-4">
            <img src={img_8} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 className="font-bold">Summer Asian Slaw</h3>
              <h4 className="mt-2">
                Pickled carrots + celery, tomatoes, cilantro, blue cheese,
                zaatar
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 className="font-bold text-green-950">
                  <span className="">Small</span>
                  <span className="">$10.0</span>
                </h5>
                <h5 className="font-bold text-green-950">
                  <span className="">Large</span>
                  <span className="">$14.0</span>
                </h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <FoodExperience />
    </div>
  );
}

export default MainDishesOur;
