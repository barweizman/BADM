import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import themes from "./Components/ManagerView/themes";

import NavigationScroll from "./Components/ManagerView/layout/NavigationScroll";
import AppRoute from "./routes/AppRoute";

const App = () => {
  const customization = useSelector(state => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <AppRoute />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
