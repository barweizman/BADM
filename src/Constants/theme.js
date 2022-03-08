import { createTheme } from "@mui/material/styles";
import { green, red } from "@mui/material/colors";

const rawTheme = createTheme({
  palette: {
    primary: {
      light: "#6c6c69",
      main: "#28282a",
      dark: "#1e1e1f"
    },
    secondary: {
      light: "#63abff",
      main: "#548cff",
      dark: "#4c7cdc"
    },
    warning: {
      main: "#ffc071",
      dark: "#ffb25e"
    },
    error: {
      light: red[500],
      main: red[700],
      dark: red[900]
    },
    success: {
      light: green[500],
      main: green[700],
      dark: green[900]
    },
    grey: {
      A100: "#dee4e3",
      A200: "#d0ced4"
    }
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700 // Roboto Condensed
  }
});

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background
    }
  }
};

export default theme;
