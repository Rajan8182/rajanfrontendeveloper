import React from 'react'
import { memo } from 'react';

const Counter = ({Increment , Decrement , count}) => {
    console.log('Child Rendered!');
    
  return (
    <div>
      <h1 className='heading'>Child Counter Components</h1>
      <p>Count : {count}</p>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default memo(Counter)