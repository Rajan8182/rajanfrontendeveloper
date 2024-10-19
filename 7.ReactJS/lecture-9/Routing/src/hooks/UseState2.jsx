import React from 'react'
import { useState } from 'react'


// const [state , setState] = useState(initialValue)


const UseState2 = () => {

    const [count, setCount] = useState(0)
    

    return (
        <div>
            <h1 className='heading  bg-red-600 font-bold text-lg p-5 text-center'>This is useState Hook In ReactJS</h1>
            <div className='container mx-auto '>
                <p className='btn my-2  text-center border-2 bg-red-500 text-xl p-6 font-bold'>Count:- {count}</p>

                <div className='text-center p-3 '>
                     <button onClick={() => setCount(count + 1)} className='btn  mx-5 border-3 p-3 bg-red-300'>Increment</button>
                     <button onClick={() => count>0 ? setCount(count - 1) : count} className='btn  mx-5 border-3 p-3 bg-red-300'>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default UseState2