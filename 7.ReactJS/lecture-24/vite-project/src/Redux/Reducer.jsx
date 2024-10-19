import React from 'react'
import { BUY_BMW , BUY_AOUDI } from './Constant'

const initialState = {
    NumOfBmw : 10,
    NumOfAoudi:30,
}

const Reducer = (state = initialState , action) => {
    console.log('Reducer Called');
    
    switch(action.type){
        case BUY_BMW : return{
            ...state,
            NumOfBmw:state.NumOfBmw - 1
        }
        case BUY_AOUDI : return{
            ...state,
            NumOfAoudi:state.NumOfAoudi - 1
        }
        default : return state
    }
}

export default Reducer
