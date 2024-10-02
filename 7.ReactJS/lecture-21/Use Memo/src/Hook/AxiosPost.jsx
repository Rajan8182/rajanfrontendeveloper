import React from 'react'
import axios from 'axios'
import { Input } from "@nextui-org/react";
import { useState } from 'react';

const AxiosPost = () => {

    const [data , setData] = useState({
        FirstName: '',
        LastName: '',
        Age: '',
    })

    console.log(data);


    const HandlePostData = (e) => {
        e.preventDefault()
        let response = axios.post('http://localhost:3000/login', data)
        .then((response) => {
            console.log(response.data);
            console.log(response.headers);
            console.log(response.config);
        })
    }


    return (
        <div>
            <h1 className='heading'>This is Axios Post Method</h1>
            {/* <button onClick={HandlePostData}>Login Data</button> */}
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 justify-center items-center h-lvh">
                <form className='bg-slate-400 p-4'>
                    <Input className='mb-4' name="FirstName" type="text" label="FirstName" onChange={(e) => setData( {...data , [e.target.name]:e.target.value})} />
                    <Input className='mb-4' name="LastName" type="text" label="LastName"  onChange={(e) => setData( {...data , [e.target.name]:e.target.value})} />
                    <Input type="text" name="Age" label="Age"  onChange={(e) => setData( {...data , [e.target.name]:e.target.value})} />
                    <button className='my-4 bg-purple-700 p-2 text-white' type='submit' onClick={HandlePostData}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AxiosPost