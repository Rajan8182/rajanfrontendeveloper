import './App.css'
import ParentCom from './ParentCom'
import ParentComponent from './ContextAPI1/ParentComponent'
import { createContext } from 'react'

export const contextData = createContext()

function App() {

  let name = "SkillQode"

  return (
    <>
    <ParentCom/>
    <ParentComponent/>
    
    {/* <contextData.Provider value={name}>
      <ComA/>
    </contextData.Provider> */}
    </>
  )
}

export default App