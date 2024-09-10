import React from "react";
import "./App.css";
import Home from "./componets/Home";
// import Ourmenus from './componets/Ourmenus';
// import AboutUs from './componets/AboutUs';
// import Contactus from './componets/Contactus';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/ourmenus' element={<OurMenus/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/contactus' element={<Contactus/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
