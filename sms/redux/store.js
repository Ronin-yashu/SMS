import { configureStore } from '@reduxjs/toolkit'
import { authorizeSlice } from './authorize/authorizeSlice'

export const store = configureStore({
  reducer: {
    authorize : authorizeSlice.reducer,
  },
})