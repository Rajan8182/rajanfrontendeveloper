// import React from "react";
// import Slider from "react-slick";
// import ViewHome from "../page/ViewHome";
// import OurRestaurant from "../page/OurRestaurant";
// import LatestNews from "../page/LatestNews";
// import Highlight from '../page/Highlight'
// import FoodExperience from "../page/FoodExperience";
// import SignUp from "../page/SignUp";
// import Footer from "../page/Footer";
// import img_1 from "../pic/asset_0.jpeg";
// import img_2 from "../pic/asset_1.jpeg";
// import img_3 from "../pic/asset_2.jpeg";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// function Home() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 0,
//     autoplaySpeed: 2000,
//     cssEase: "linear",
//   };

//   return (
//     <div className="overflow-hidden slider-container -z-0 ">
//       <Slider {...settings} className="p-24 ">
//         <div className="mt-28 relative ">
//           <img
//             className="border-none w-screen h-screen rounded-2xl"
//             src={img_1}
//           />
//           <h1 className="absolute bottom-72 left-9 font-bold text-white text-2xl">
//             Highlights
//           </h1>
//           <h1 className="absolute bottom-32 left-9 font-bold text-white text-5xl">
//             Where every <br /> ingredient tells <br /> a story
//           </h1>
//           <a href="./componet 2/OurMenus.jsx">
//             <button className="absolute bottom-9 left-9 p-3 rounded-full bg-yellow-300 text-green-950  hover:scale-80 font-bold">
//               View Our Menus
//             </button>
//           </a>
//         </div>
//         <div className="mt-28 relative">
//           <img
//             className="border-none w-screen h-screen rounded-2xl"
//             src={img_2}
//           />
//           <h1 className="absolute bottom-72 left-9 font-bold text-white text-2xl">
//             Highlights
//           </h1>
//           <h1 className="absolute bottom-32 left-9 font-bold text-white text-5xl">
//             Where every <br /> ingredient tells <br /> a story
//           </h1>
//           <a href="./componet 2/OurMenus.jsx">
//             <button className="absolute bottom-9 left-9 p-3 rounded-full bg-yellow-300 text-green-950  hover:scale-80 font-bold">
//               View Our Menus
//             </button>
//           </a>
//         </div>
//         <div className="mt-28 relative">
//           <img
//             className="border-none w-screen h-screen rounded-2xl"
//             src={img_3}
//           />
//           <h1 className="absolute bottom-72 left-9 font-bold text-white text-2xl">
//             Highlights
//           </h1>
//           <h1 className="absolute bottom-32 left-9 font-bold text-white text-5xl">
//             Where every <br /> ingredient tells <br /> a story
//           </h1>
//           <a href="./componet 2/OurMenus.jsx">
//             <button className="absolute bottom-9 left-9 p-3 rounded-full bg-yellow-300 text-green-950  hover:scale-80 font-bold">
//               View Our Menus
//             </button>
//           </a>
//         </div>
//       </Slider>
//       <ViewHome />
//       <OurRestaurant />
//       <LatestNews />
//       <Highlight />
//       <FoodExperience />
//       <SignUp />
//       <Footer />  
      
//     </div>
//   );
// }

// export default Home;


import React from "react";
import Slider from "react-slick";
import ViewHome from "../page/ViewHome";
import OurRestaurant from "../page/OurRestaurant";
import LatestNews from "../page/LatestNews";
import Highlight from '../page/Highlight';
import FoodExperience from "../page/FoodExperience";
import SignUp from "../page/SignUp";
import Footer from "../page/Footer";
import img_1 from "../pic/asset_0.jpeg";
import img_2 from "../pic/asset_1.jpeg";
import img_3 from "../pic/asset_2.jpeg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="overflow-hidden slider-container">
      <Slider {...settings} className="p-6 md:p-24">
        <div className="relative mt-16 md:mt-28">
          <img
            className="border-none w-full h-screen object-cover rounded-2xl"
            src={img_1}
            alt="Highlight 1"
          />
          <h1 className="absolute bottom-36 left-4 md:bottom-72 md:left-9 font-bold text-white text-xl md:text-2xl">
            Highlights
          </h1>
          <h1 className="absolute bottom-20 left-4 md:bottom-32 md:left-9 font-bold text-white text-3xl md:text-5xl">
            Where every <br /> ingredient tells <br /> a story
          </h1>
          <a href="./componet 2/OurMenus.jsx">
            <button className="absolute bottom-6 left-4 md:bottom-9 md:left-9 px-6 py-3 rounded-full bg-yellow-300 text-green-950 hover:scale-105 font-bold">
              View Our Menus
            </button>
          </a>
        </div>

        <div className="relative mt-16 md:mt-28">
          <img
            className="border-none w-full h-screen object-cover rounded-2xl"
            src={img_2}
            alt="Highlight 2"
          />
          <h1 className="absolute bottom-36 left-4 md:bottom-72 md:left-9 font-bold text-white text-xl md:text-2xl">
            Highlights
          </h1>
          <h1 className="absolute bottom-20 left-4 md:bottom-32 md:left-9 font-bold text-white text-3xl md:text-5xl">
            Where every <br /> ingredient tells <br /> a story
          </h1>
          <a href="./componet 2/OurMenus.jsx">
            <button className="absolute bottom-6 left-4 md:bottom-9 md:left-9 px-6 py-3 rounded-full bg-yellow-300 text-green-950 hover:scale-105 font-bold">
              View Our Menus
            </button>
          </a>
        </div>

        <div className="relative mt-16 md:mt-28">
          <img
            className="border-none w-full h-screen object-cover rounded-2xl"
            src={img_3}
            alt="Highlight 3"
          />
          <h1 className="absolute bottom-36 left-4 md:bottom-72 md:left-9 font-bold text-white text-xl md:text-2xl">
            Highlights
          </h1>
          <h1 className="absolute bottom-20 left-4 md:bottom-32 md:left-9 font-bold text-white text-3xl md:text-5xl">
            Where every <br /> ingredient tells <br /> a story
          </h1>
          <a href="./componet 2/OurMenus.jsx">
            <button className="absolute bottom-6 left-4 md:bottom-9 md:left-9 px-6 py-3 rounded-full bg-yellow-300 text-green-950 hover:scale-105 font-bold">
              View Our Menus
            </button>
          </a>
        </div>
      </Slider>

      <ViewHome />
      <OurRestaurant />
      <LatestNews />
      <Highlight />
      <FoodExperience />
      <SignUp />
      <Footer />
    </div>
  );
}

export default Home;
