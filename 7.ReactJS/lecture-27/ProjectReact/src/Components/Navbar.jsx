import React from 'react'
import { NavLink  , Outlet} from 'react-router-dom'



const Navbar = () => {
    return (
        <div>
            <div className='bg-gray-500 flex justify-around p-6 items-center'>
                <div>
                    <div className='absolute'>
                        <img className='h-auto w-36' src="https://grandrestaurantv6-7.b-cdn.net/clean/wp-content/uploads/sites/2/2022/09/logo.png" alt="" />
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className='flex space-x-12'>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/menu">Our Menus</NavLink></li>
                            <li><NavLink to="/about">AboutUs</NavLink></li>
                            <li><NavLink to="/contact">ContactUs</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar