import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { add_to_cart } from '../Redux/Action'


const Shop = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.Count)

  console.log(data);
  
  return (
    <div className='flex flex-col items-center mt-6 h-screen justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-white'>
      <h1 className='text-xl rounded-xl  bg-gradient-to-r from-indigo-500 border-black border-2 p-6 '>This is Shop Page</h1>
      <p className='p-5 border-white border-2 rounded-xl text-white'>{data}</p>
      <button className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 border-white border-2 rounded-xl text-white' onClick={() => dispatch(add_to_cart())}>ADD_TO_CART</button>
    </div>
  )  
}

export default Shop