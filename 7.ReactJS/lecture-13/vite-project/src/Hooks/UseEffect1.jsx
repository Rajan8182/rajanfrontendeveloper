import React from 'react'
import { useEffect , useState } from 'react'


const UseEffect1 = () => {

    const [count  , setCount] = useState(0)

    useEffect(() => console.log('useEffect Hook') , [count])

  return (
    <div>
      <h1 className='heading'>This is useEffect Hook</h1>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default UseEffect1