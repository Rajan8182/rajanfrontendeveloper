import React from 'react'
import { useDispatch ,  useSelector } from 'react-redux'
import {remove_to_cart , empty_cart} from '../Redux/Action'

const Cart = () => {

  const dispatch = useDispatch()

  const CartData = useSelector(state => state.Count)

  return (
    <div>
      {CartData}
      <button onClick={() => dispatch(remove_to_cart())}>REMOVE_TO_CART</button>
      <button onClick={() => dispatch(empty_cart())}>EMPTY_CART</button>
    </div>
  )
}

export default Cart