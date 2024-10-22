// import React from "react";
// import SaladsOur from '../page/SaladsOur'
// import MainDishesOUr from '../page/MainDishesOur'
// import NewsletterSignUp from "../page/SignUp";
// import Footer from '../page/Footer';
// import img_21 from "../pic/A-1.jpg";


// const OurMenus = () => {
//   return (
//     <div className="py-32">
//       <div className="container mx-auto px-8">
//         <div className="flex justify-center items-center text-center mb-10">
//           <h1 className="text-5xl font-bold text-black mb-4">
//             Flavour so good you’ll <br /> try to eat with your eyes
//           </h1>
//         </div>

//         <div className="flex justify-center items-center rounded-md ">
//           <img src={img_21} alt="" className="w-full rounded-3xl" />
//         </div>
//         <div className="flex justify-between mt-9">
//           <div className="font-bold text-3xl ">
//             <p>
//               A place where food, <br /> design, and ambiance <br /> come
//               together to <br /> create a memorable <br /> experience.
//             </p>
//           </div>
//           <p>
//             Whether you want to add more plant-based <br /> meals to your diet
//             or are simply looking to <br /> change up your salad game, you’ll
//             find tons of <br /> inspiration in the salad recipes below.
//           </p>
//         </div>
//         <div className="mt-5">
//           <a href="./componet 2/AboutUS.jsx">
//             {" "}
//             <button className="bottom-9 border-2 border-black left-36 px-7 py-3 rounded-full text-black  hover:scale-80 hover:border-none hover:text-green-950 hover:bg-yellow-500 font-bold">
//               Learn More
//             </button>
//           </a>
//         </div>
//       </div>
//       <SaladsOur />
//       <MainDishesOUr />
//       <NewsletterSignUp />
//       <Footer />
//     </div>
//   );
// };

// export default OurMenus;


import React from "react";
import SaladsOur from "../page/SaladsOur";
import MainDishesOur from "../page/MainDishesOur";
import NewsletterSignUp from "../page/SignUp";
import Footer from "../page/Footer";
import img_21 from "../pic/A-1.jpg";

const OurMenus = () => {
  return (
    <div className="py-16 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-center items-center text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
            Flavour so good you’ll <br /> try to eat with your eyes
          </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center rounded-md mb-10">
          <img src={img_21} alt="" className="w-full rounded-3xl" />
        </div>

        {/* Text Section */}
        <div className="lg:flex justify-between mt-9 space-y-6 lg:space-y-0">
          <div className="font-bold text-xl lg:text-3xl">
            <p>
              A place where food, <br /> design, and ambiance <br /> come
              together to <br /> create a memorable <br /> experience.
            </p>
          </div>
          <div className="text-lg lg:text-base">
            <p>
              Whether you want to add more plant-based <br /> meals to your diet
              or are simply looking to <br /> change up your salad game, you’ll
              find tons of <br /> inspiration in the salad recipes below.
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-5 flex justify-center lg:justify-start">
          <a href="./componet 2/AboutUS.jsx">
            <button className="px-7 py-3 rounded-full text-black font-bold border-2 border-black hover:scale-105 transition-all hover:border-none hover:text-green-950 hover:bg-yellow-500">
              Learn More
            </button>
          </a>
        </div>
      </div>

      {/* Menu Sections */}
      <SaladsOur />
      <MainDishesOur />

      {/* Newsletter and Footer */}
      <NewsletterSignUp />
      <Footer />
    </div>
  );
};

export default OurMenus;
