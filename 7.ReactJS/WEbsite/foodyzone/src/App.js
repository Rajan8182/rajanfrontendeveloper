import React from 'react'; 
import './App.css';
import Home from './componets/Home';
import AboutUs from './componets/AboutUs';
import Cart from './componets/Cart';
import Order from './componets/Order';
import SignUp from './componets/SignUp';
import Contactus from './componets/Contactus';
import Navbar1 from './componets/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


 
function App() { 
  return ( 
    <div> 
      <BrowserRouter> 
        <Navbar1 /> 
        <Routes> 
          <Route path='/' element={<Home />} ></Route>
          <Route path='/aboutus' element={<AboutUs />} ></Route> 
        </Routes> 
      </BrowserRouter> 
    </div> 
  ); 
} 
 
export default App;