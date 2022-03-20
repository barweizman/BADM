import React from "react";
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter } from "react-router-dom";

import AppRoute from "./Components/AppRoute";

import "./App.css";
import theme from "./Constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
