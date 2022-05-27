/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import {
  calcCartTotal,
  findCartProductIndex,
  getCartSession,
  setCartSession
} from "../../Constants/helpers";

const initialState = {
  user: undefined,
  cart: getCartSession(),
  searchProdValue: "",
  searchResultProduct: [],
  isAdmin: false,
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
      const prodIndex = findCartProductIndex(
        state.cart.products,
        action.payload.id
      );
      if (prodIndex > -1) {
        state.cart.products[prodIndex] = {
          product: action.payload.id,
          quantity:
            state.cart.products[prodIndex].quantity +
            (1 || action.payload.quantity)
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
      state.cart.total = calcCartTotal(state.cart.products);
      setCartSession(state.cart);
    },
    removeFromCart: (state, action) => {
      const prodIndex = findCartProductIndex(
        state.cart.products,
        action.payload.id
      );
      if (prodIndex > -1) {
        const newCart = [...state.cart.products];
        newCart.splice(prodIndex, 1);
        state.cart.products = newCart;
        state.cart.total = calcCartTotal(state.cart.products);
      }
      setCartSession(state.cart);
    },
    setSearchProdValue: (state, action) => {
      state.searchProdValue = action.payload;
    },
    setSearchResultProducts: (state, action) => {
      state.searchResultProduct = [...action.payload];
    },
    setIsCurrentUserAdmin: (state, action) => {
      state.isAdmin = Boolean(action.payload);
    },
    changeProductQuantity: (state, action) => {
      const prodIndex = findCartProductIndex(
        state.cart.products,
        action.payload.id
      );

      if(prodIndex > -1) {
        const newProducts =  [...state.cart.products];
        newProducts[prodIndex] = {
          product: action.payload.product,
          quantity: state.cart.products[prodIndex].quantity + action.payload.quantity
        }
        if(state.cart.products[prodIndex].quantity + action.payload.quantity === 0) {
          newProducts.splice(prodIndex, 1); // remove it
        }
        state.cart.products = newProducts;
        state.cart.total = calcCartTotal(state.cart.products);
        setCartSession(state.cart);
      }
    },
  }
});

export const {
  logoutUser,
  setUser,
  addToUserCart,
  changeProductQuantity,
  removeFromCart,
  setSearchProdValue,
  setSearchResultProducts,
  setIsCurrentUserAdmin,
} = sliceReducer.actions;

export const getUser = state => state?.appState?.user;

export const getUserCart = state => state?.appState.cart;

export const getSearchProdValue = state => state?.appState.searchProdValue;

export const getIsCurrentUserAdmin = state => state?.appState.isAdmin;

export const getSearchResultProduct = state =>
  state?.appState?.searchResultProduct;

export default sliceReducer.reducer;
