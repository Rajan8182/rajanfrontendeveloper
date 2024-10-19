import React from 'react'
import { useState } from 'react'


// const [state , setState] = useState(initialValue)


const UseState3 = () => {

    const [count, setCount] = useState(0)

    // const handleIncrement = () => {
    //     console.log('Increment')
    //     return setTimeout(() => setCount(count + 1) , 2000) 
    // }

    // const handleDecrement = () => {
    //     if(count > 0){
    //         console.log('Decrement')
    //         return setTimeout(() => setCount(count - 1) , 2000) 
    //     }else{
    //         setCount(count)
    //     }
    // }

    const handleIncrement = () => {
        console.log('Increment')
        return setTimeout(() => setCount(count => count + 1) , 2000) 
    }

    const handleDecrement = () => {
            console.log('Decrement')
            return count>0 ? setTimeout(() => setCount( count - 1) , 2000) : count ;
      
    }
    

    return (
        <div>
            <h1 className='heading  bg-emerald-600 font-bold text-lg p-5 text-center'>This is useState Hook In ReactJS</h1>
            <div className='container mx-auto text-center'>
                <p className='btn my-2 text-center border-2 bg-emerald-500 text-xl p-6 font-bold'>Count:- {count}</p>
                <button onClick={handleIncrement} className='btn  mx-5  first-line: border-3 p-3 bg-emerald-300'>Increment</button>
                <button onClick={handleDecrement} className='btn  mx-5  first-line:border-3 p-3 bg-emerald-300'>Decrement</button>
            </div>
        </div>
    )
}

export default UseState3
