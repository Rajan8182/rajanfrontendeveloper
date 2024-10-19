// import React from "react";
// import img_21 from "../pic/logo.png";
// import { FaFacebookF } from "react-icons/fa";
// import { FaYelp } from "react-icons/fa6";
// import { SiTripadvisor } from "react-icons/si";
// import { FaInstagram } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="bg-neutral-50 h-[500px] w-[9px00] m-28 rounded-2xl p-28">
//       <div className="flex justify-center ">
//         <p className="text-2xl font-bold text-gray-900 mb-4">
//           Call us on +45 453 3432
//         </p>
//         <button className="bg-green-900 text-yellow-300 px-6 py-2 ml-7 rounded-full font-semibold hover:bg-green-800">
//           Make a Reservation
//         </button>
//       </div>
//       <div className="flex">
//         <img src={img_21} className="w-60" alt="" />
//         <div className=" mt-10 ml-16 ">
//           <h1 className="font-2px">
//             Lake House, 13 Hanway, <br /> Square, London, UK
//           </h1>
//           <p className="mt-4 text-black">Monday-Wednesday: 11a-9p</p>
//           <p className="mt-2 text-black">Thursday-Saturday: 11a-10p</p>
//           <p className="mt-2 text-black">Happy Hour: Everyday 2p-6p</p>
//         </div>
//         <div className="gap gap-5 ml-40 mt-12">
//           <p className="font-semibold text-gray-900">About Us</p>
//           <p className="font-semibold text-gray-900">Our Menus</p>
//           <p className="font-semibold text-gray-900">Contact Us</p>
//         </div>
//         <div className=" ml-40 mt-12">
//           <p className="font-semibold text-gray-900">Newsletter</p>
//           <p className="font-semibold text-gray-900">Shop</p>
//         </div>
//       </div>
//       <div className=" flex justify-between">
//         <div className="text-center text-gray-600 text-sm mt-10">
//           <p>Copyright © Grand Restaurant Theme Demo by ThemeGoods</p>
//         </div>
//         <div className="flex mt-9 gap-6">
//           <FaFacebookF />
//           <FaYelp />
//           <SiTripadvisor />
//           <FaInstagram />
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// {
//   /*
// <div className="mb-4">
//             <p className="font-semibold text-gray-900">About Us</p>
//             <p className="text-gray-700 mt-2">Our Menus</p>
//             <p className="text-gray-700">Contact Us</p>
//           </div>


//           <div className="mb-4">
//             <p className="font-semibold text-gray-900">Newsletter</p>
//             <p className="text-gray-700 mt-2">Shop</p>
//           </div>

// <div className="text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
//           <p className="text-2xl font-semibold text-gray-900 mb-4">
//             Call us on +45 453 3432
//           </p>
//           <button className="bg-green-900 text-yellow-300 px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition duration-300">
//             Make a Reservation
//           </button>
//         </div>
//   */
// }


import React from "react";
import img_21 from "../pic/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { SiTripadvisor } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 py-16 px-8 md:px-28 lg:px-36 rounded-2xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <p className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Call us on +45 453 3432
        </p>
        <button className="bg-green-900 text-yellow-300 px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition duration-300">
          Make a Reservation
        </button>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Logo Section */}
        <img src={img_21} className="w-60 mb-4 md:mb-0" alt="Restaurant Logo" />
        <div className="ml-0 md:ml-16">
          <h1 className="text-lg font-semibold">
            Lake House, 13 Hanway, <br /> Square, London, UK
          </h1>
          <p className="mt-4 text-black">Monday-Wednesday: 11a-9p</p>
          <p className="mt-2 text-black">Thursday-Saturday: 11a-10p</p>
          <p className="mt-2 text-black">Happy Hour: Everyday 2p-6p</p>
        </div>
        {/* Links Section */}
        <div className="ml-0 md:ml-20 mt-6 md:mt-0">
          <p className="font-semibold text-gray-900">About Us</p>
          <p className="font-semibold text-gray-900">Our Menus</p>
          <p className="font-semibold text-gray-900">Contact Us</p>
        </div>
        <div className="ml-0 md:ml-20 mt-6 md:mt-0">
          <p className="font-semibold text-gray-900">Newsletter</p>
          <p className="font-semibold text-gray-900">Shop</p>
        </div>
      </div>
      {/* Copyright and Social Media Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-10">
        <div className="text-center text-gray-600 text-sm mb-4 md:mb-0">
          <p>Copyright © Grand Restaurant Theme Demo by ThemeGoods</p>
        </div>
        <div className="flex justify-center md:justify-end gap-6 mt-4">
          <FaFacebookF className="text-gray-600 hover:text-green-900 transition duration-300" />
          <FaYelp className="text-gray-600 hover:text-green-900 transition duration-300" />
          <SiTripadvisor className="text-gray-600 hover:text-green-900 transition duration-300" />
          <FaInstagram className="text-gray-600 hover:text-green-900 transition duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
