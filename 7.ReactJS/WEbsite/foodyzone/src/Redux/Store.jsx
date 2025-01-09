import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer'
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";
// import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware()

const Store = configureStore({
    reducer:rootReducer,
    // middleware:(getMiddleware) => getMiddleware().concat(sagaMiddleware , logger) 
    middleware:() => [sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default Store


