import React, { useEffect } from 'react'

const UseEffect2 = ({children}) => {

    useEffect(() => {
        console.log('Child Rendered!!');
    } , [children])

  return (
    <div>
      <h1 className='heading'>This is useEffect Hook</h1>
      {children}
    </div>
  )
}

export default UseEffect2