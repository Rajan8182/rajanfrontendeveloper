import React from 'react'
import { useDispatch ,  useSelector } from 'react-redux'
import {remove_to_cart , empty_cart} from '../Redux/Action'

const Cart = () => {

  const dispatch = useDispatch()

  const CartData = useSelector(state => state.Count)

  return (
    <div>
      {CartData}
      <button onClick={() => dispatch(remove_to_cart())} className='flex flex-col items-center mt-6 justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-white border-white border-2 rounded-xl'>REMOVE_TO_CART</button>
      <button onClick={() => dispatch(empty_cart())}  className='flex flex-col items-center mt-6 justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 text-whitep-5 border-white border-2 rounded-xl'>EMPTY_CART</button>
    </div>
  )
}

export default Cart