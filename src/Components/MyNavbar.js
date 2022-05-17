import { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Toolbar,
  useTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getUser, logoutUser } from "../store/reducers/generalReducer";

import CartIconNavBar from "./Cart/CartIconNavBar";
import ProductSearch from "./NavBar/ProductSearch";
import ProductFavorites from "./NavBar/ProductFavorites";

import paths from "../Constants/paths";
import ProfilePopper from "./NavBar/ProfilePopper";
import { endLoginSession } from "../Constants/helpers";

const MyNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const anchorRef = useRef(null);
  const theme = useTheme();

  const [isPopperOpen, setIsPopperOpen ]= useState(false);

  const user = getUser(state);

  const handleLoginClicked = () => {
    navigate(paths.login);
  };

  const handleProfileClicked = () => {
    setIsPopperOpen(prevState => !prevState);
  };

  const handleClosePopper = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event?.target)) {
      return;
  }
    setIsPopperOpen(false);
  }

  const handleLogoutClicked = () => {
    endLoginSession();
    dispatch(logoutUser());
    navigate(paths.index);
  };

  const handleLogoClicked = () => {
    navigate(paths.index);
  };

  const prevOpen = useRef(isPopperOpen);
    useEffect(() => {
        if (prevOpen.current === true && isPopperOpen === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = isPopperOpen;
    }, [isPopperOpen]);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.primary.main
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {user !== undefined
          ? <>
          <Chip
                sx={{
                    height: "48px",
                    alignItems: "center",
                    borderRadius: "27px",
                    transition: "all .2s ease-in-out",
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.light,
                    "&[aria-controls=\"menu-list-grow\"], &:hover": {
                        borderColor: theme.palette.primary.main,
                        background: `${theme.palette.primary.main}!important`,
                        color: theme.palette.primary.light,
                        "& svg": {
                            stroke: theme.palette.primary.light
                        }
                    },
                    "& .MuiChip-label": {
                        lineHeight: 0
                    }
                }}
                icon={
                    <Avatar
                        sx={{
                            ...theme.typography.mediumAvatar,
                            margin: "8px 0 8px 8px !important",
                            cursor: "pointer",
                            backgroundColor: theme.palette.secondary.main
                        }}
                        ref={anchorRef}
                        aria-controls={isPopperOpen ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    />
                }
                variant="outlined"
                ref={anchorRef}
                aria-controls={isPopperOpen ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleProfileClicked}
                color="primary"
            />
            <ProfilePopper ref={anchorRef.current} open={isPopperOpen} handleClose={handleClosePopper} handleLogoutClicked={handleLogoutClicked} user={user} />
          </>
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
        <Grid sx={{ display: "flex" }}>
          {user !== undefined && <ProductFavorites />}
          <ProductSearch />
          <CartIconNavBar />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default MyNavbar;
