import { blue, green, purple, blueGrey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[300],
      light: blue[200],
      dark: blue[400]
    },
    secondary: {
      main: blue[600],
      light: blue[200],
      dark: blue[400]
    }
  }
});

export default theme;
