import { createSlice } from "@reduxjs/toolkit";

const continueSlice = createSlice({
  name: "continueState",
  initialState: { allow: false },
  reducers: {
    setContinueState: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContinueState } = continueSlice.actions;
export default continueSlice.reducer;
