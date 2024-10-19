import { configureStore } from '@reduxjs/toolkit'

import reduxReducer from './ReactSlice'

const Store = configureStore({
    reducer:{
        counter:reduxReducer
    }
})

export default Store