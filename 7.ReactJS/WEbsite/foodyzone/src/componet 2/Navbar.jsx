// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../pic/logo.png";
// import { Outlet } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
   
//     <div className="navbar z-10">
//       <div className="bg-slate-200 bg-blur-sm  flex justify-around p-4 items-center  ">
//         <div>
//           <img src={logo} alt="" className="h-20" />
//         </div>

//         <div>
//           <nav className="flex">
//             <ul className="flex gap-8 mt-4">
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/OurMenu">Our Meuns </Link>
//               </li>
//               <li>
//                 <Link to="/AboutUS">AboutUS</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//             <div className="flex justify-center items-center">
//               <Link to="/ReservationForm"><button className="bg-green-950 text-yellow-500 font-bold rounded-full ml-20 md:py-3 md:px-5 lg:py-4 lg:px-8 hover:bg-yellow-500 hover:text-green-950 transition duration-300 ease-in-out">
//                 Responsive Button
//               </button>
//               </Link>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//       <Outlet />
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pic/logo.png";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar z-10">
        <div className="bg-slate-200 bg-blur-sm flex justify-between items-center p-4 lg:p-6">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-8 h-8 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <div className={`lg:flex ${isOpen ? "block" : "hidden"} w-full lg:w-auto`}>
            <nav className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
              <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 mt-4 lg:mt-0">
                <li>
                  <Link to="/" className="hover:text-green-950">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/OurMenu" className="hover:text-green-950">
                    Our Menus
                  </Link>
                </li>
                <li>
                  <Link to="/AboutUS" className="hover:text-green-950">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-green-950">
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Responsive Button */}
              <div className="mt-4 lg:mt-0 flex justify-center lg:block">
                <Link to="/ReservationForm">
                  <button className="bg-green-950 text-yellow-500 font-bold rounded-full py-3 px-6 hover:bg-yellow-500 hover:text-green-950 transition duration-300 ease-in-out">
                    Book a Table
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
