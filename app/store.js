import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../app/counterSlice";
import productSlice from "./productSlice";
import newCounterSlice from "../app/newCounterSlice";
import cartSlice from "./cartSlice";

const rootReducers = combineReducers({
  counter: counterSlice,
  newSlice: newCounterSlice,
  productList: productSlice,
  cart:cartSlice,
});

export const store = configureStore({
  reducer: rootReducers,
});
