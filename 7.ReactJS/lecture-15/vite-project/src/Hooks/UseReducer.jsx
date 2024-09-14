import React from 'react'
import { useReducer } from 'react'
import Reducer from './Reducer'

const UseReducer = () => {

    const [state , dispatch] = useReducer(Reducer , {age:45,fruits:20})

    return (
        <div>
            <h1 className='heading'>This is React useReducer Hook</h1>
            <p className='p-2 m-4'>CountToys : {state.age}</p>
            <p className='p-2 m-4'>CountFruits : {state.fruits}</p>
            <button onClick={() => dispatch('incrementT')}className='border-2 border-black bg-green-400 p-2 m-4'>IncrementT</button>
            <button onClick={() => dispatch('decrementT')}className='border-2 border-black bg-green-400 p-2 m-4'>DecrementT</button>
            <button onClick={() => dispatch('incrementF')}className='border-2 border-black bg-green-400 p-2 m-4'>IncrementF</button>
            <button onClick={() => dispatch('decrementF')}className='border-2 border-black bg-green-400 p-2 m-4'>DecrementF</button>
        </div>
    )
}

export default UseReducer