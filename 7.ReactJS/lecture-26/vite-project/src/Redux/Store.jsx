import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware } from 'redux'
import logger from "redux-logger";

import reduxReducer from "./ReactSlice";

const Store = configureStore({
  reducer: {
    counter: reduxReducer,
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default Store;
