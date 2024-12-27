import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../pic/logo.png";
import { Outlet } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar z-10">
        <div className="bg-slate-200 bg-blur-sm flex justify-between items-center p-4 lg:p-6">
          <div>
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
          </div>

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

          <div
            className={`lg:flex ${
              isOpen ? "block" : "hidden"
            } w-full  lg:w-auto`}
          >
            <nav className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
              <ul className="flex flex-col lg:flex-row font-bold text-2xl gap-6 items-center lg:gap-8 mt-4 lg:mt-0">
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
                <li>
                  <Link to="/Shop" className="hover:text-green-950">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/Cart" className="hover:text-green-950">
                    <FaCartArrowDown />
                  </Link>
                </li>
                <li>
                  <Link to="/Wishlist" className="hover:text-green-950">
                    <FaHeart />
                  </Link>
                </li>
              </ul>

              <div className="mt-4 lg:mt-0 flex justify-center lg:block">
                <Link to="/ReservationForm">
                  <button className="bg-green-950 text-yellow-500 font-bold rounded-full py-3 px-6 hover:bg-yellow-500 hover:text-green-950 transition duration-300 ease-in-out">
                    Mack a Reservation
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
