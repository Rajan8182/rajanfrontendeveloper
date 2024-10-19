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
        <ProductList name="Toys" inStock={true}/>
        <ProductList name="Electonics" inStock={false}/>
        <ProductList name="Mobiles" inStock={true}/>
        <ProductList name="Perfumes" inStock={true}/>
        <ProductList name="Clothes" inStock={false}/>
      </ul>
    </div>
  )
}

export default Conditional
