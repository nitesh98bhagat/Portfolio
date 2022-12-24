import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalConstantSlice from "./globalConstantSlice";

const rootReducers = combineReducers({
  globalConstants: globalConstantSlice,
});

export const store = configureStore({
  reducer: rootReducers,
});
