import React from "react";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import theme from "../Constants/theme";
import paths from "../Constants/paths";

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleLoginClicked = () => {
    navigate(paths.login);
  };
  const handleRegisterClicked = () => {
    navigate(paths.register);
  };

  const handleLogoClicked = () => {
    navigate(paths.index);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.primary.main
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          sx={{
            borderRadius: theme.spacing(1),
            color: "white"
          }}
          variant="outlined"
          onClick={handleLoginClicked}
        >
          Login
        </Button>
        <Button onClick={handleLogoClicked}>
          <Box
            component="img"
            src="https://firebasestorage.googleapis.com/v0/b/javascriptblog-e9b5a.appspot.com/o/badm%2Ffavicon.ico?alt=media&token=b244b5b9-fdd7-411a-aacb-47a21294c245"
            sx={{ height: 50, width: 50 }}
          />
        </Button>
        <Button
          sx={{
            borderRadius: theme.spacing(1),
            color: "white"
          }}
          variant="outlined"
          onClick={handleRegisterClicked}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
