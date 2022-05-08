import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import AgeDialog from "./Components/AgeDialog";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import Register from "./Pages/Register";
import ProductPage from "./Pages/ProductPage";

import paths from "./Constants/paths";
import { getIsOver18, getJwtKey, writeIsOver18 } from "./Constants/helpers";
import { setUser } from "./store/reducers/appState";
import { getUser } from "./services/serverServices";
import Cart from "./Pages/Cart";

const AppRoute = () => {
  const dispatch = useDispatch();
  const [ageAlert,setAgeAlert ] = useState(false);

  useEffect(() => {
    const localJwt = getJwtKey();
    const isOver18 = getIsOver18();
    const func = async () => getUser();

    if (localJwt) {
      func().then(res => {
        if (res.status === 200) {
          dispatch(setUser(res.data.user));
        }
      });
    }
    if(!isOver18) {
      setAgeAlert(true);

    }
  }, []);

  const handleCloseAgeDialog = () => {
    setAgeAlert(false);
    writeIsOver18();
  }

  return (
    <>
    {ageAlert && <AgeDialog open={ageAlert} handleClose={handleCloseAgeDialog} />}
    <Routes>
      <Route path={paths.index} element={<HomePage />} />
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.register} element={<Register />} />
      <Route path={`${paths.product}/:id`} element={<ProductPage />} />
      <Route path={paths.cart} element={<Cart />} />
    </Routes>
    </>
  );
};

export default AppRoute;
