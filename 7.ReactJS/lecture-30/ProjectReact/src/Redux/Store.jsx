// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer'
import createSagaMiddleware from "redux-saga";
import productSaga from "./productSaga";

const sagaMiddleware = createSagaMiddleware()

// const Store = createStore(rootReducer)

const Store = configureStore({
    reducer:rootReducer,
    middleware:(getMiddleware) => getMiddleware().concat(sagaMiddleware) 
})

sagaMiddleware.run(productSaga)

export default Store


