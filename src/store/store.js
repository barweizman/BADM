import { configureStore, combineReducers } from "@reduxjs/toolkit";
import appStateReducer from "./reducers/appState";

const combinedReducers = combineReducers({
  appState: appStateReducer
});

const store = configureStore({
  reducer: combinedReducers
});

export default store;
