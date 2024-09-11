import './App.css'
import UseEffect1 from './Hooks/UseEffect1'
import UseEffect2 from './Hooks/UseEffect2'
import { useState } from 'react'
import UseEffect3 from './Hooks/UseEffect3'

function App() {

  const[toggle , setToggle] = useState(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <>
       <UseEffect1/>
      <UseEffect2>
        <button onClick={handleClick}>Click</button>
        {toggle && <div>useEffect Hook</div>}
      </UseEffect2>
      <UseEffect3/>
    </>
  )
}

export default App