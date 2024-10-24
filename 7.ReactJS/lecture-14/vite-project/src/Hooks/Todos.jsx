import React from 'react'
import { memo } from 'react'

const Todos = ({todos , addTodos}) => {
    console.log('Child Rendered!');
    
  return (
    <div>
      <h2>My Todos</h2>
      {
        todos.map((todo , index) => {
            return <p key={index}>{todo}</p>
        })
      }
      <button onClick={addTodos}>ADD TODO</button>
    </div>
  )
}

export default memo(Todos)
