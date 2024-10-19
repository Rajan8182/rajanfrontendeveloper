import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement } from '../Redux/ReactSlice'

const ReduxContainer = () => {

  const Cakedata = useSelector(state => state.counter.item)

  const dispatch = useDispatch()

  return (
    <div>
      <h1 className='heading'>This is React Redux Concept</h1>
      <div className='m-4'>
        <span className='button'>{Cakedata}</span>
        <button className='button' onClick={() => dispatch(increment())}>Increment</button>
        <button className='button' onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  )
}

export default ReduxContainer