import React from 'react'
import { useState } from 'react'

const FilterInAPI = () => {

    const[data , setData] = useState([])    

    const ProductData = () => {
        let response = fetch('https://fakestoreapi.com/products')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);  
            setData(data)
        })
        .catch((error) => {
            console.log(error);
            
        })
        .finally(() => {
            console.log('API COM');
        })
    } 

  return (
    <div>
      <h1 className='heading'>React Filter Useing API</h1>
      <button onClick={ProductData}>Click</button>
      {
        data.map((item) => <div key={item.id}>{item.title}</div>)
      }
    </div>
  )
}

export default FilterInAPI
