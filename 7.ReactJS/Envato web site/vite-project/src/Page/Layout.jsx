import React from "react";
import Navbar from "../Components/Navbar";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Works from "./Works";
import Blog from "./Blog";
import Contact from "./Contact";

const Layout = () => {
  return (
    <div className="bg-[#f0f2f5] dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Works" element={<Works/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
