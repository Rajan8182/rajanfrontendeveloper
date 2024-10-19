import React from 'react'
import { BUY_AOUDI } from './Constant'

let initialAoudi = {
    item:30
}

const AoudiReducer = (state = initialAoudi, action) => {
    switch(action.type){
        case BUY_AOUDI:return {
            item:state.item - 1
        }
        default:return state
    }
}

export default AoudiReducer
