import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove_to_cart, empty_cart } from '../Redux/Action'

const Cart = () => {

  const dispatch = useDispatch()

  const CartData = useSelector(state => state.cart)

  console.log("CartData" , CartData);
  
 
  return (
    <div>
      <div className='flex flex-row mt-16'>
      {
        CartData.map(item => {
          return (
            <ul className='bg-red-500 p-4 m-4'>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
              <button onClick={() => dispatch(remove_to_cart(item))}>Remove</button>
            </ul>
          )
        })
      }
      </div>
    </div>
  )
}

export default Cart