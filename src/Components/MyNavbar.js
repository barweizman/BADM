import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Toolbar
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { getUser } from "../store/reducers/appState";

import theme from "../Constants/theme";
import paths from "../Constants/paths";
import CartIconNavBar from "./Cart/CartIconNavBar";

const MyNavbar = () => {
  const navigate = useNavigate();
  const state = useSelector(s => s);
  // const dispatch = useDispatch();

  const user = getUser(state);

  const handleLoginClicked = () => {
    navigate(paths.login);
  };

  const handleProfileClicked = () => {
    // link to profile page
  };

  // const handleLogoutClicked = () => {
  //   endLoginSession();
  //   dispatch(logoutUser());
  //   navigate(paths.index);
  // };

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
        {user !== undefined
          ? <IconButton onClick={handleProfileClicked}>
              <Avatar>
                {user.email[0].toUpperCase()}
              </Avatar>
            </IconButton>
          : <Button
              sx={{
                borderRadius: theme.spacing(1),
                color: "white",
                textTransform: "capitalize"
              }}
              variant="outlined"
              onClick={handleLoginClicked}
            >
              Login
            </Button>}

        <Button onClick={handleLogoClicked}>
          <Box
            component="img"
            src="https://firebasestorage.googleapis.com/v0/b/javascriptblog-e9b5a.appspot.com/o/badm%2Ffavicon.ico?alt=media&token=b244b5b9-fdd7-411a-aacb-47a21294c245"
            sx={{ height: 50, width: 50 }}
          />
        </Button>
        <CartIconNavBar />
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
