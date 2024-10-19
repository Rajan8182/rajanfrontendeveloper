import React, { Component } from "react";
import Slider from "react-slick";
import img_10 from '../pic/Blog_1.jpg';
import img_11 from '../pic/Blog_2.jpg';
import img_12 from '../pic/Blog_3.jpg';
import img_13 from '../pic/Blog_4.jpg';
import img_14 from '../pic/Blog_5.jpg';

function LatestNews() {
  const settings = {
    focusOnSelect: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="slider-container">
      <div className="ml-20">
        <div className="font-bold ">
          <h1 className="text-black">Latest News</h1>
        </div>

        <div className="flex justify-between">
          <h1 className="text-black font-bold text-5xl">
          Check Our <br /> Blog
          </h1>
        </div>
      </div>

      <Slider {...settings}>

        {/* 1 */}
        <div className="m-10 p-3 text-2xl">
          <div className="overflow-hidden relative rounded-3xl ">
            <div className="absolute text-small left-5 top-5 px-3 py-2 rounded-xl bg-yellow-400" >
              <h4 className="font-bold text-2xl">29</h4>
              <h4>SEP</h4>
            </div>
          <img src={img_10} className="h-[300px] w-[500px]  hover:scale-110 hover:rounded-3xl" alt="" />
          </div>
          <div className="font-bold">
            <h1>How a Restaurant Pre-Shift Meeting <br /> Improves Expereience</h1>
          </div>
        </div>
        {/* 2 */}
        <div className="m-10  p-3 text-2xl  " >
        <div className="overflow-hidden  relative  rounded-3xl ">
        <div className=" absolute text-small left-5 top-5 px-3 py-2 rounded-xl bg-yellow-400" >
              <h4 className="font-bold text-2xl">29</h4>
              <h4>SEP</h4>
            </div>
          <img src={img_11} className="h-[300px] w-[500px]  hover:scale-110 hover:rounded-3xl" alt="" />
         </div>
          <div className="font-bold">
            <h1>9 Things to Offer to Attract All <br /> Restaurant Positions</h1>
          </div>
        </div>
        {/* 3 */}
        <div className="m-10  p-3 text-2xl  ">
        <div className="overflow-hidden  relative  rounded-3xl ">
        <div className=" absolute text-small left-5 top-5 px-3 py-2 rounded-xl bg-yellow-400" >
              <h4 className="font-bold text-2xl">29</h4>
              <h4>SEP</h4>
            </div>
          <img src={img_12} className="h-[300px] w-[500px]  hover:scale-110 hover:rounded-3xl" alt="" />
          </div>
          <div className="font-bold">
            <h1>When Restaurant Menu Design Can <br /> Help Lower Food Cost</h1>
          </div>
        </div>
        {/* 4 */}
        <div className="m-10  p-3 text-2xl  ">
        <div className="overflow-hidden  relative  rounded-3xl ">
        <div className=" absolute text-small left-5 top-5 px-3 py-2 rounded-xl bg-yellow-400" >
              <h4 className="font-bold text-2xl">29</h4>
              <h4>SEP</h4>
            </div>
          <img src={img_13} className="h-[300px] w-[500px]  hover:scale-110 hover:rounded-3xl" alt="" />
         </div>
          <div className="font-bold ">
            <h1>A farm-to-table restaurant that uses <br /> all-natural ingredients</h1>
          </div>
        </div>
        {/* 5 */}
        <div className="m-10  p-3 text-2xl  ">
        <div className="overflow-hidden  relative  rounded-3xl ">
        <div className=" absolute text-small left-5 top-5 px-3 py-2 rounded-xl bg-yellow-400" >
              <h4 className="font-bold text-2xl">29</h4>
              <h4>SEP</h4>
            </div>
          <img src={img_14} className="h-[300px] w-[500px]  hover:scale-110 hover:rounded-3xl" alt="" />
        </div>  
          <div className="font-bold">
            <h1>Flavour so good you'll try to eat with <br /> your eyes</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default LatestNews;
