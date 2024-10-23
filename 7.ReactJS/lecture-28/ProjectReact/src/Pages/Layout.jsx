import React from 'react'
import Home from './Home'
import Faq from './Faq'
import Login from './Login'
import SignUp from './SignUp'
import Shop from './Shop'
import Wishlist from './wishlist'
import Navbar from '../components/Navbar'
import AboutUs from './aboutUs'
import OurMenus from './ourMenus'
import ContactUs from './contactUs'
import Cart from './cart'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'


const route = createBrowserRouter([
    {
        path:"/",
        element:<Navbar/>,
        children:[
            {
                path:"/home",
                element:<Home/>
            },
            {
                path:"/about",
                element:<AboutUs/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/wishlist",
                element:<Wishlist/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/faq",
                element:<Faq/>
            },
            {
                path:"/menu",
                element:<OurMenus/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<SignUp/>
            },
        ]
    },
    
])



const Layout = () => <RouterProvider router={route}></RouterProvider>

export default Layout