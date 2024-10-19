import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const reactSlice = createSlice(
    {
        name:"counter",
        initialState:{
            item:10
        },
        reducers:{
            increment:(state) => {
                state.item += 1 // state.item = state.item + 1
                console.log("Increment Called");
            },
            decrement:(state) => {
                state.item -= 1 // state.item = state.item - 1
                console.log("Decrement Called");
            },
        }
    }
)

export const {increment , decrement} = reactSlice.actions

export default reactSlice.reducer

