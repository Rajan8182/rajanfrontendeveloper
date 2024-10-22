import React from 'react'
import Home from './Home'
import OurMenus from './OurMenus'
import AboutUS from './AboutUS'
import Contact from './Contact'
import Navbar from './Navbar'
import Error from './Error'
import ReservationForm from './ReservationForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/ourmenu" element={<OurMenus />}></Route>
                    <Route path="/AboutUS" element={<AboutUS />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/error" element={<Error />}></Route>
                    <Route path="/ReservationForm" element={<ReservationForm />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
