import React from "react";
import { AppBar, Button, Grid, Toolbar } from "@mui/material";
import theme from "../Constants/theme";
import paths from "../Constants/paths";
import { useNavigate } from "react-router-dom";

const MyNavbar = () => {
  const navigate = useNavigate();

  const handleLoginClicked = () => {
    navigate(paths.login);
  };
  const handleRegisterClicked = () => {
    navigate(paths.register);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.secondary.main
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button
          sx={{
            borderRadius: theme.spacing(1),
            color: "white"
          }}
          variant="contained"
          onClick={handleLoginClicked}
        >
          Login
        </Button>
        <Button
          sx={{
            borderRadius: theme.spacing(1),
            color: "white"
          }}
          variant="contained"
          onClick={handleRegisterClicked}
        >
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
