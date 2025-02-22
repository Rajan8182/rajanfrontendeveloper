import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaLayerGroup,
  FaPenNib,
  FaBlog,
  FaCommentDots,
} from "react-icons/fa";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="sticky z-50 top-5 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-2xl p-3 flex justify-between items-center py-5 font-bricolage container mx-auto">
      <div className="text-4xl font-bold flex items-center">
        <Link to="/" className="text-black dark:text-white">
          Bento
        </Link>
        <span className="text-blue-600">Folio</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
        <li className="hover:text-black dark:hover:text-white cursor-pointer">
          <Link to="/" className="flex space-x-2">
            <FaHome className="text-xl" /> <span>Home</span>
          </Link>
        </li>
        <li className="hover:text-black dark:hover:text-white cursor-pointer">
          <Link className="flex space-x-2" to="/about">
            <FaUser className="text-xl" /> <span>About</span>
          </Link>
        </li>
        <li className="hover:text-black dark:hover:text-white cursor-pointer">
          <Link className="flex space-x-2" to="/services">
            <FaLayerGroup className="text-xl" /> <span>Services</span>
          </Link>
        </li>
        <li className="hover:text-black dark:hover:text-white cursor-pointer">
          <Link className="flex space-x-2" to="/works">
            <FaPenNib className="text-xl" /> <span>Works</span>
          </Link>
        </li>
        <li className="hover:text-black dark:hover:text-white cursor-pointer">
          <Link className="flex space-x-2" to="/blog">
            <FaBlog className="text-xl" /> <span>Blog</span>
          </Link>
        </li>
        <li className="hover:text-black dark:hover:text-white cursor-pointer">
          <Link className="flex space-x-2" to="/contact">
            <FaCommentDots className="text-xl" /> <span>Contact</span>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 dark:text-white shadow-lg p-5 flex flex-col space-y-4 text-center md:hidden">
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            <Link to="/works" onClick={() => setIsOpen(false)}>
              Works
            </Link>
          </li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="hover:text-black dark:hover:text-white cursor-pointer">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 dark:text-white shadow-lg p-5 flex flex-col space-y-4 text-center md:hidden">
          {/* Mobile Navigation Links */}
        </ul>
      )}
      <div className="flex gap-3">
        <div className="">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
        </div>
        {/* Contact Button */}
        <div className="hidden md:flex items-center">
          <Link to="/contact">
            <button className="bg-black hover:bg-blue-700 dark:bg-black dark:hover:bg-blue-700 dark:text-white text-white px-4 py-2 rounded-lg flex items-center">
              Let's Talk ⬇
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
