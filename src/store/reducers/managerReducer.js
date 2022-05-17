/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
  searchProdValue: "",
  searchResultProduct: [],
  users: [],
  statistics: {}
};

export const sliceReducer = createSlice({
  name: "managerState",
  initialState,
  reducers: {
    setManagerSearchProdValue: (state, action) => {
      state.searchProdValue = action.payload;
    },
    setManagerSearchResultProducts: (state, action) => {
      state.searchResultProduct = [...action.payload];
    }
  }
});

export const {
  logoutUser,
  setUser,
  addToUserCart,
  removeFromCart,
  setManagerSearchProdValue,
  setManagerSearchResultProducts
} = sliceReducer.actions;



export const getManagerSearchProdValue = state => state?.managerState?.searchProdValue;

export const getManagerSearchResultProduct = state =>
  state?.managerState?.searchResultProduct;

export default sliceReducer.reducer;
