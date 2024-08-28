import React from 'react'

export function ProductList({inStock , name}){
    // if(inStock === "true"){
    //     return <li>{name}</li>
    // }
    // else{
    //     return <li><del>{name}</del></li>
    // }
    return(
        <>
            {
                inStock ? <div>{name}</div> : <div><del>{name}</del></div>
            }
        </>
    )
  
}

const Conditional = ({name , inStock}) => {
  return (
    <div>
      <h1 class="heading">React Conditional Rendering</h1>
      <ul>
        <ProductList name=" Air Conditioners" inStock={true}/>
        <ProductList name="Refrigerators" inStock={false}/>
        <ProductList name="Microwave Ovens" inStock={true}/>
        <ProductList name="Gas Stoves" inStock={true}/>
        <ProductList name="Juicers" inStock={false}/>

      </ul>
    </div>
  )
}

export default Conditional