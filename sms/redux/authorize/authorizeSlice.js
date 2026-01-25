import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};

export const authorizeSlice = createSlice({
  name: "authorize",
  initialState,
  reducers: {
    AuthorizedTrue: (state) => {
      state.value = true;
    },
    AuthorizedFalse: (state) => {
      state.value = false;
    }
  },
});

export const { AuthorizedTrue, AuthorizedFalse } = authorizeSlice.actions;
export default authorizeSlice.reducer;