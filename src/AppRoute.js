import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import ProductPage from "./Pages/ProductPage";

import paths from "./Constants/paths";
import { getJwtKey } from "./Constants/helpers";
import { setUser } from "./store/reducers/appState";
import { getUser } from "./services/serverServices";

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
    <Routes>
      <Route path={paths.index} element={<HomePage />} />
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.register} element={<Register />} />
      <Route path={`${paths.product}/:id`} element={<ProductPage />} />
    </Routes>
  );
};

export default AppRoute;
