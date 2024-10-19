import React from 'react'
import { useState } from 'react'
import Counter from './Counter'
import { useMemo } from 'react'

const UseMemo = () => {

    const [count , setCount]   = useState(0)

    const [count1 , setCount1] = useState(0)
    
    const Increment = useMemo(
        () => setCount(count + 1) , [count1] 
    )

    const Decrement = useMemo(
        () => setCount(count - 1) , [count1]
    )

  return (
    <div>
      <h1 className='heading'>This is React useMemo Hooks</h1>
      <Counter Increment={Increment} Decrement={Decrement} count={count}/>
      <p>count : {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Increment</button>
      <button onClick={() => setCount1(count1 - 1)}>Decrement</button>
    </div>
  )
}

export default UseMemo