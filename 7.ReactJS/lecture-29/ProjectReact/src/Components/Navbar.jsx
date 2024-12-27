import React from 'react'
import { NavLink  , Outlet} from 'react-router-dom'
import { LiaOpencart } from "react-icons/lia";

const Navbar = () => {
    return (
        <div>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-around p-6  items-center'>
                <div>
                    <div className='absolute top-0'>
                        <img className='h-auto w-24' src="https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/logo.png" alt="" />
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className='flex text-xl text-white items-center space-x-12'>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/menu">Our Menus</NavLink></li>
                            <li><NavLink to="/about">AboutUs</NavLink></li>
                            <li><NavLink to="/contact">ContactUs</NavLink></li>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><NavLink to="/cart"><LiaOpencart className='text-2xl ' /></NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar