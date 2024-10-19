import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buy_bmw , buy_aoudi } from '../Redux/Action'

const ReduxContainer = () => {

    const Bmwdata = useSelector(state => state.NumOfBmw)

    const Aoudidata = useSelector(state => state.NumOfAoudi)

    console.log(Bmwdata);

    console.log(Aoudidata);
    
    const dishpatch =useDispatch()

  return (
    <div>
      <h1 className='heading'>This is React Redux Concept</h1>
      <div className='m-4'>
        <span className='button'>{Bmwdata}</span>
        <button className='button' onClick={() => dishpatch(buy_bmw())}>BuyBmw</button>
      </div>

      <div className='m-4'>
        <span className='button'>{Aoudidata}</span>
        <button className='button' onClick={() => dishpatch(buy_aoudi())}>BuyAoudi</button>
      </div>
    </div>
  )
}

export default ReduxContainer
