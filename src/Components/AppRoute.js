import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import Footer from "./Footer";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import MyNavbar from "./MyNavbar";
import Register from "./Pages/Register";

import paths from "../Constants/paths";
import { getJwtKey } from "../Constants/helpers";
import { setUser } from "../store/reducers/appState";
import { getUser } from "../services/serverServices";

const AppRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const localJwt = getJwtKey();
    const func = async () => getUser();

    if (localJwt) {
      func().then(res => {
        if (res.status === 200) {
          dispatch(setUser(res.data.user));
        }
      });
    }
  }, []);

  return (
    <Stack>
      <MyNavbar />
      <Routes>
        <Route path={paths.index} element={<HomePage />} />
        <Route path={paths.login} element={<LoginPage />} />
        <Route path={paths.register} element={<Register />} />
      </Routes>
      <Footer />
    </Stack>
  );
};

export default AppRoute;
