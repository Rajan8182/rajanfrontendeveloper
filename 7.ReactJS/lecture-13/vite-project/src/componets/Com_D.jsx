import React from 'react'
import { data, data1 } from './Main1.jsx'
import { useContext } from 'react'

/* useContext Hooks */

const Com_D = () => {

  const a = useContext(data) 
  const b = useContext(data1) 

  return (
    <div>
       <h1 className='heading'>This is Components D {a}{b}</h1>
      {/* {
        <data.Consumer>
          {

            (name) => {
              return (
                <>
                  {
                    <data1.Consumer>
                      {
                        (topic) => {
                          return (
                            <>
                              <h1 className='heading'>This is Components D {name}{topic}</h1>
                            </>
                          )
                        }
                      }
                    </data1.Consumer>
                  }
                </>
              )
            }
          }
        </data.Consumer>
      } */}
    </div>
  )
}

export default Com_D