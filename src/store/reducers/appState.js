/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  cart: {
    products: [],
    total: 200
  }
};

export const sliceReducer = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: state => {
      state.user = undefined;
    },
    addToUserCart: (state, action) => {
      state.cart.products = [...state.cart.products, action.payload];
    },
    removeFromCart: (state, action) => {
      const newCart = [...state.cart.products];
      newCart.filter(item => item.id !== action.payload.id);
      state.cart.products = newCart;
    }
  }
});

export const {
  logoutUser,
  setUser,
  addToUserCart,
  removeFromCart
} = sliceReducer.actions;

export const getUser = state => state.appState.user;

export const getUserCart = state => state.appState.cart;

export default sliceReducer.reducer;
