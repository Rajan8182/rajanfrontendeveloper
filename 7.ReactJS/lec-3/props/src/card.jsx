import React from 'react'
import { useState } from 'react'

const Card = ({links , names , discs}) => {

    const [count  , setCount] = useState(0)

    const handleChange = () => {
        setCount(count+1)
    }

    return (
        <div>
            <div className='w-72 border'>
                <div>
                    <img src={links[count]} alt="" />
                </div>
                <div className='p-4'>
                    <h1 className='font-bold text-2xl mb-4'>{names[count]}</h1>
                    <p>{discs[count]}</p>
                    <a className='bg-purple-600 text-white p-2 inline-block mt-4' href="">Click Me</a>
                </div>
            </div>
            <button onClick={handleChange}>Click Me</button>
        </div>
    )
}

export default Card