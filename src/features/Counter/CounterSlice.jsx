import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {count: 0},
    reducers: {
        increment: state=>{
            state.count = state.count + 1
        },
        incrementByAmount: (state, action)=>{
            state.count = state.count + action.payload
        },
        decrement: state=>{
            state.count = state.count - 1
        },
        reset: state=>{
            state.count = 0 
        }
    }
})

export const {increment, incrementByAmount, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;