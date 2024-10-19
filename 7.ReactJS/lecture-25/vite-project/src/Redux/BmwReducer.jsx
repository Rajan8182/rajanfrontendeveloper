import React from 'react'
import { BUY_BMW } from './Constant'

let  initialBmw = {
    item:10
}

const BmwReducer = (state = initialBmw , action) => {
  switch(action.type){
    case BUY_BMW:return  {
        item:state.item - 1
    } 
    default:return state
  }

}

export default BmwReducer