import React from 'react'
import BmwReducer from './BmwReducer'
import AoudiReducer from './AoudiReducer'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    BmwReducer , AoudiReducer
})

export default rootReducer