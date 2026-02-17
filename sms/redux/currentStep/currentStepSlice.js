import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 1 
}

export const currentStepSlice = createSlice({
    name : "currentStep",
    initialState,
    reducers : {
        increment : (state)=>{
            state.value +=1
        },
        decrement : (state)=>{
            state.value -=1
        },
        amount : (state,action)=>{
            state.value = action.payload
        }
    }
})

export const {increment,decrement,amount} = currentStepSlice.actions
export default currentStepSlice.reducer