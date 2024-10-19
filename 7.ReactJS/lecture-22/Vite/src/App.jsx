import './App.css'
import ComA from './ContextApi/ComA'
import { createContext } from 'react'

export const contextData = createContext()

function App() {

  let name = "SkillQode"

  return (
    <>
    <contextData.Provider value={name}>
      <ComA/>
    </contextData.Provider>
    </>
  )
}

export default App