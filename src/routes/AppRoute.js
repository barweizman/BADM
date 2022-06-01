/* eslint-disable no-nested-ternary */
import { useEffect, useState} from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getIsCurrentUserAdmin, setIsCurrentUserAdmin, setUser } from "../store/reducers/generalReducer";
import { getUser } from "../services/serverServices";

import AgeDialog from "../Components/CustomerView/AgeDialog";
import Cart from "../Pages/CartPage";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import Register from "../Pages/RegisterPage";
import ProductPage from "../Pages/ProductPage";
import SearchPageResult from "../Pages/SearchResultPage";
import ProductsCategory from "../Pages/ProductsCategory";
import MyFavoritesPage from "../Pages/MyFavoritesPage";
import App404 from "../Pages/404Page";
import ManagerRoutes from "./ManagerRoutes";
import MainLayout from "../Components/ManagerView/layout/MainLayout";
import ClientCheckoutPage from "../Pages/ClientCheckoutPage";
// import CheckoutPage from "../Pages/CheckoutPage";

import paths from "../Constants/paths";
import { getIsOver18, getJwtKey, writeIsOver18 } from "../Constants/helpers";
import UserPage from "../Pages/UserPage";
import LoadingAnimation from "../Components/Common/LoadingAnimation";



const AppRoute = () => {
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const [ageAlert,setAgeAlert ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const isAdmin = getIsCurrentUserAdmin(state);

  useEffect(() => {
    const localJwt = getJwtKey();
    const isOver18 = getIsOver18();
    const func = () => getUser();
    
    if (localJwt) {
      func().then(res => {
        if (res.status === 200) {
          if(res.data?.user?.isAdmin) {
            dispatch(setIsCurrentUserAdmin(true));
          }
          dispatch(setUser(res.data.user));
        }
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
    if(!isOver18) {
      setAgeAlert(true);

    }
  }, [isAdmin]);

  const handleCloseAgeDialog = () => {
    setAgeAlert(false);
    writeIsOver18();
  }

  return (
    <>
    {ageAlert && <AgeDialog open={ageAlert} handleClose={handleCloseAgeDialog} />}
    {isLoading ? <LoadingAnimation /> : isAdmin ?
      <MainLayout>
        <ManagerRoutes />
      </MainLayout>
    :
    <Routes> 
      <Route path={paths.index} element={<HomePage />} />
      <Route path={paths.login} element={<LoginPage />} />
      <Route path={paths.checkout} element={<ClientCheckoutPage />} />
      <Route path={paths.register} element={<Register />} />
      <Route path={paths.searchResult} element={<SearchPageResult />} />
      <Route path={paths.cart} element={<Cart />} />
      <Route path={paths.favorites} element={<MyFavoritesPage />} />
      <Route path={`${paths.product}/:id`} element={<ProductPage />} />
      <Route path={`${paths.products}/:category`} element={<ProductsCategory />} />
      <Route path={`${paths.userProfile}/:uid`} element={<UserPage />} />
      <Route path="*" element={<App404 />} />
    </Routes>
    
    }
    </>
  );
};

export default AppRoute;
