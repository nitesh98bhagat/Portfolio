import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5,
};

export const newCounterSlice = createSlice({
  name: "newSlice",
  initialState,
  reducers: {
    multipleBy: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { multipleBy } = newCounterSlice.actions;

export default newCounterSlice.reducer;
