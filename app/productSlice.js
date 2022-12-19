import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [{}],
};

export const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    fetchProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchProduct } = productSlice.actions;

export const getItems = (state) => state.productList.value;

export default productSlice.reducer;
