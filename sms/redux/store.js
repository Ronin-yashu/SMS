import { configureStore } from "@reduxjs/toolkit";
import { currentStepSlice } from "./currentStep/currentStepSlice";

export const store = configureStore({
    reducer : {
        currentStep : currentStepSlice.reducer
    },
})