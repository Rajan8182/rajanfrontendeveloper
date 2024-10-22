import React from "react";
import Slider from "react-slick";
import img_4 from "../pic/Blog_1.jpg"
import img_5 from "../pic/Blog_11.jpg";
import img_6 from "../pic/Blog_6.jpg";
import img_7 from "../pic/Blog_7.jpg";
import img_8 from "../pic/Blog_9.jpg";
import img_9 from "../pic/Blog_10.jpg";

function SaladsOur() {
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
    <div className="mt-11 p-20">

      <div className="flex justify-between">
        <h1 className="text-black font-bold text-5xl">
        Salads
        </h1>
      </div>

      <div className="slider-container mt-9">
        <Slider {...settings}>
          {/* 1 */}
          <div className="w-48 h-64 px-4">
            <img src={img_8} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 class="font-bold">Easy Pasta Salad</h3>
              <h4 className="mt-2">
              Goat cheese, roasted almonds, warm wild rice, shredded kale, vinaigrette
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 class="font-bold text-green-950">
                  <span class="">Small</span>
                  <span class="">$11.0</span>
                </h5>
                <h5 class="font-bold text-green-950">
                  <span class="">Large</span>
                  <span class="">$16.0</span>
                </h5>
              </div>
            </div>
          </div>
         
          {/* 2 */}
          <div className="w-48 h-64 px-4">
            <img src={img_9} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 class="font-bold">Creamy Vegan Salad</h3>
              <h4 className="mt-2">
              Roasted sweet potatoes, apples, cheese, kale, balsamic vinaigrette
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 class="font-bold text-green-950">
                  <span class="">Small</span>
                  <span class="">$9.0</span>
                </h5>
                <h5 class="font-bold text-green-950">
                  <span class="">Large</span>
                  <span class="">$13.0</span>
                </h5>
              </div>
            </div>
          </div>
          
          {/* 3 */}
          <div className="w-48 h-full px-4">
            <img src={img_4} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 class="font-bold">Guacamole Greens</h3>
              <h4 className="mt-2">
                Roasted Chicken, Avocado, Tomatoes, Red Onions, Shredded Cabbage
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 class="font-bold text-green-950">
                  <span class="">Small</span>
                  <span class="">$8.0</span>
                </h5>
                <h5 class="font-bold text-green-950">
                  <span class="">Large</span>
                  <span class="">$12.0</span>
                </h5>
              </div>
            </div>
          </div>
         
          {/* 4 */}
          <div className="w-48 h-64 px-4">
            <img src={img_5} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 class="font-bold">Harvest Bowl</h3>
              <h4 className="mt-2">
              Roasted chicken, roasted sweet potatoes, apples, goat chees
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 class="font-bold text-green-950">
                  <span class="">Small</span>
                  <span class="">$7.0</span>
                </h5>
                <h5 class="font-bold text-green-950">
                  <span class="">Large</span>
                  <span class="">$10.0</span>
                </h5>
              </div>
            </div>
          </div>
          
          {/* 5 */}
          <div className="w-48 h-64 px-4">
            <img src={img_6} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 class="font-bold">Summer Asian Slaw</h3>
              <h4 className="mt-2">
              Pickled carrots + celery, tomatoes, cilantro, blue cheese, zaatar
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 class="font-bold text-green-950">
                  <span class="">Small</span>
                  <span class="">$10.0</span>
                </h5>
                <h5 class="font-bold text-green-950">
                  <span class="">Large</span>
                  <span class="">$14.0</span>
                </h5>
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="w-48 h-64 px-4">
            <img src={img_7} className=" rounded-2xl" alt="" />
            <div className="mt-4">
              <h3 class="font-bold">Shredded Brussels Sprout</h3>
              <h4 className="mt-2">
              Raw beets, cucumbers, basil, sunflower seeds, warm wild rice, shredded kale
              </h4>
              <div className="flex gap-12 mt-2">
                <h5 class="font-bold text-green-950">
                  <span class="">Small</span>
                  <span class="">$9.0</span>
                </h5>
                <h5 class="font-bold text-green-950">
                  <span class="">Large</span>
                  <span class="">$13.0</span>
                </h5>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default SaladsOur;
