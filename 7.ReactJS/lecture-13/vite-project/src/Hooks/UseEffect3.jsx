import React from 'react'
import { useState , useEffect } from 'react'

const UseEffect3 = () => {

    const [data , setData] = useState([])

    console.log('data' , data);
    
    useEffect(() => {
            let res = fetch('http://localhost:3000/product')
            .then((res) => res.json())
            .then((res) => setData(res))
    } , [])

    return (
        <div className='flex justify-between'>
            {
                data.map((item) => {
                    return (
                        <>
                            <div className="relative h-[400px] w-[300px] rounded-md">
                                <img
                                    src={item.image}
                                    className="z-0 h-full w-full rounded-md object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-left">
                                    <h1 className="text-lg font-semibold text-white">{item.title}</h1>
                                    <p className="mt-2 text-sm text-gray-300">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </div >
    )
}

export default UseEffect3