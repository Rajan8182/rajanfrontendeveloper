import React from 'react'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const UseRef = () => {

    const [data, setData] = useState([])

    const dataRef = useRef([])

    console.log('dataRef', dataRef);


    // const handleClick = async() => {
    //     let res = await fetch('https://fakestoreapi.com/products')
    //     let response = await res.json()
    //     console.log(response);
    //     setData(response)
    // }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/auth/login').then((res) => {setData(res.data)})
    } , [])

    // const handleData = () => {
    //     let res = axios.get('https://fakestoreapi.com/products').then((res) => {setData(res.data)})
    // }


    // const Ref1 = useRef(0)
    // const square = useRef(null)

    // console.log(Ref1);

    // const handleClick = () => {
    //     square.current.style.width = '100px'
    //     square.current.style.height = '100px'
    //     square.current.style.backgroundColor = 'black'
    // }

    return (
        <div>
            <h1 className='heading'>This is useRef Hook in React</h1>
            {/* <button onClick={handleData}>Click</button> */}
            {/* <div ref={square}></div> */}
            <div className='flex flex-wrap justify-around'>

                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className="w-60 flex flex-col rounded-xl  min-h-[19rem] ">
                                <div className='h-72'>
                                    <img
                                        src={item.image}
                                        alt="test"
                                        className="object-cover object-center rounded-t-xl h-full w-full"
                                    />
                                </div>
                                <div className="flex flex-col py-3 px-3 pb-10">
                                    <div className="flex justify-between ">
                                        <h1 className="font-bold ">{item.title}</h1>
                                        <h1>Price</h1>
                                    </div>
                                    <div className="flex  justify-between">
                                        <p>{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UseRef