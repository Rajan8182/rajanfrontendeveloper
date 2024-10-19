/* Context API : createContext , contextProvider , contextConsumer */

import React from 'react'
import Com_A from './Com_A'
import { createContext } from 'react'

export const data = createContext()
export const data1 = createContext()

let name = "Context API"
let topic = "Props Drilling"


const Main1 = () => {
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={topic}>
          <Com_A />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Main1