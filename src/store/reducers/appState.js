/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined
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
    }
  }
});

export const { logoutUser, setUser } = sliceReducer.actions;

export const getUser = state => state.appState.user;

export default sliceReducer.reducer;
