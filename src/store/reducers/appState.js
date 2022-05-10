/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { findCartProductIndex } from "../../Constants/helpers";

const initialState = {
  user: undefined,
  cart: {
    products: [],
    total: 200
  },
  searchProdValue: "",
  searchResultProduct: []
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
      console.log(action.payload);
      const prodIndex = findCartProductIndex(
        state.cart.products,
        action.payload.id
      );
      if (prodIndex > -1) {
        state.cart.products[prodIndex] = {
          product: action.payload.id,
          quantity: state.cart.products[prodIndex].quantity + 1
        };
      } else {
        state.cart.products = [
          ...state.cart.products,
          {
            product: action.payload.product,
            quantity: action.payload.quantity || 1
          }
        ];
      }
    },
    removeFromCart: (state, action) => {
      const prodIndex = findCartProductIndex(
        state.cart.products,
        action.payload.id
      );
      console.log(prodIndex);
      if (prodIndex > -1) {
        const newCart = [...state.cart.products];
        console.log(newCart.splice(prodIndex, 1));
        //   const newCart = state.cart.products.slice(prodIndex, 1);
        //   state.cart.products = newCart;
      }
    },
    setSearchProdValue: (state, action) => {
      state.searchProdValue = action.payload;
    },
    setSearchResultProducts: (state, action) => {
      state.searchResultProduct = [...action.payload];
    }
  }
});

export const {
  logoutUser,
  setUser,
  addToUserCart,
  removeFromCart,
  setSearchProdValue,
  setSearchResultProducts
} = sliceReducer.actions;

export const getUser = state => state.appState.user;

export const getUserCart = state => state.appState.cart;

export const getSearchProdValue = state => state.appState.searchProdValue;

export const getSearchResultProduct = state =>
  state.appState.searchResultProduct;

export default sliceReducer.reducer;
