import React from "react";
import Home from "./Home";
import OurMenus from "./OurMenus";
import AboutUS from "./AboutUS";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Error from "./Error";
import Shop from "./Shop";
import SignUp from "./Signup";
import Cart from "./Cart";
import Wishlist from "./Wishlist";
import Login from "./Login";
import ReservationForm from "./ReservationForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/ourmenu" element={<OurMenus />}></Route>
          <Route path="/AboutUS" element={<AboutUS />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/error" element={<Error />}></Route>
          <Route path="/ReservationForm" element={<ReservationForm />}></Route>
          <Route path="/Shop" element={<Shop />}>{" "}</Route>
          <Route path="/Cart" element={<Cart />}>{" "}</Route>
          <Route path="/Wishlist" element={<Wishlist />}>{" "}</Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
