import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaLayerGroup, FaPenNib, FaBlog, FaCommentDots } from "react-icons/fa";
import { Moon, Sun, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky z-50 top-5 bg-white  shadow-md rounded-2xl p-3 flex justify-between items-center py-5 font-bricolage container mx-auto">
      <div className="text-4xl font-bold flex items-center">
        <Link to="/" className="text-black ">Bento</Link>
        <span className="text-blue-600">Folio</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-gray-600 ">
        {[
          { path: "/", label: "Home", icon: <FaHome className="text-xl" /> },
          { path: "/about", label: "About", icon: <FaUser className="text-xl" /> },
          { path: "/services", label: "Services", icon: <FaLayerGroup className="text-xl" /> },
          { path: "/works", label: "Works", icon: <FaPenNib className="text-xl" /> },
          { path: "/blog", label: "Blog", icon: <FaBlog className="text-xl" /> },
          { path: "/contact", label: "Contact", icon: <FaCommentDots className="text-xl" /> },
        ].map((item, idx) => (
          <li key={idx} className="hover:text-black  cursor-pointer">
            <Link to={item.path} className="flex space-x-2">
              {item.icon} <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white  shadow-lg p-5 flex flex-col space-y-4 text-center md:hidden">
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/services", label: "Services" },
            { path: "/works", label: "Works" },
            { path: "/blog", label: "Blog" },
            { path: "/contact", label: "Contact" },
          ].map((item, idx) => (
            <li key={idx} className="hover:text-black  cursor-pointer">
              <Link to={item.path} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Dark Mode Toggle & Contact Button */}
      <div className="flex gap-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-gray-600 "
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>

        <div className="hidden md:flex items-center">
          <Link to="/contact">
            <button className="bg-black hover:bg-blue-700 dark:bg-black 700  text-white px-4 py-2 rounded-lg flex items-center">
              Let's Talk ⬇
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
