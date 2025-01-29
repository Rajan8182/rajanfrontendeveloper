import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../pic/logo.png";
import { Outlet } from "react-router-dom";
import { LiaOpencart } from "react-icons/lia";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const Datalength = useSelector((state) => state.cart.cart.length);
  const wishlist = useSelector((state) => state.wishlist.wishlist.length);

  const [isOpen, setIsOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const userInitial = loggedInUser ? loggedInUser.charAt(0).toUpperCase() : "";

  return (
    <>
      <div className="navbar z-10 fixed top-0 w-full bg-slate-200">
        <div className="flex justify-between items-center p-4 lg:p-6">
          <div>
            <img src={logo} alt="Logo" className="h-16 md:h-20" />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
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

          <div>
            <nav className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
              <ul className="flex flex-col lg:flex-row font-bold text-xl gap-4 items-center lg:gap-8">
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

                <li className="relative">
                  <Link to="/cart">
                    <LiaOpencart className="text-2xl" />
                    <span className="absolute -top-2 -right-2 bg-white text-black w-4 h-4 flex justify-center items-center rounded-full text-xs">
                      {Datalength}
                    </span>
                  </Link>
                </li>

                <li>
                  <Link to="/Wishlist" className="hover:text-green-950">
                    {wishlist === 0 ? (
                      <FaRegHeart />
                    ) : (
                      <FaHeart style={{ color: "#fa0000" }} />
                    )}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            {loggedInUser ? (
              <div className="bg-gray-500 w-9 h-9 flex justify-center font-2xl items-center rounded-full text-black font-bold">
                {userInitial}
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Login
              </Link>
            )}

            {!loggedInUser && (
              <Link
                to="/Signup"
                className="px-4 py-2 bg-yellow-500 text-white rounded"
              >
                Sign Up
              </Link>
            )}

            {loggedInUser && (
              <Link to="/logout">
                <CiLogout className="text-2xl font-bold text-green-600 hover:text-green-800" />
              </Link>
            )}
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
