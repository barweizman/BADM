import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

import themes from "./Pages/ManagerView/themes";

import NavigationScroll from "./Pages/ManagerView/layout/NavigationScroll";
import AppRoute from "./AppRoute";

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
