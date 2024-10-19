import React from 'react'
import { useState } from 'react'
import Todos from './Todos'
import { useCallback } from 'react'

const UseCallback = () => {

    /* useMemo Hook */

    const [count  , setCount] = useState(0)
    const [todos , setTodos] = useState([])

    const increment = () => {
        console.log('increment called');
        setCount((count) => count + 1)
    }

    // const addTodos = () => {
    //     console.log('addtodos called');
    //     setTodos((t) => [...t , "New Todo"])
    // }


    const addTodos = useCallback(
        () => {
            setTodos((t) => [...t , "New Todo"])
        } , [todos])

  return (
    <div>
      <Todos todos={todos} addTodos={addTodos}></Todos>
      <hr />
      <div>
        <p>
        Count: {count}
        </p>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  )
}

export default UseCallback