import {createStore} from 'redux'
// import Reducer from "./Reducer";
import rootReducer from './rootReducer'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'


// const Store = createStore(Reducer)

const Store = createStore(rootReducer , applyMiddleware(logger))

export default Store