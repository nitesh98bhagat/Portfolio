import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  isSearchBarOpen: false,
  backgroundColor: "#fbfbfb",
};

export const globalConstantSlice = createSlice({
  name: "globalConstant",
  initialState,
  reducers: {
    toggleSearchBar: (state) => {
      state.isSearchBarOpen = !state.isSearchBarOpen;
    },
    clearSearch: (state) => {
      state.searchValue = "";
    },
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { clearSearch, setSearch, toggleSearchBar } =
  globalConstantSlice.actions;

export default globalConstantSlice.reducer;
