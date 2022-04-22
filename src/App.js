import React from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRoute from "./AppRoute";

import "./App.css";
import theme from "./Constants/theme";
import store from "./store/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
