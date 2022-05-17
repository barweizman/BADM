import paths from "./Constants/paths";
import App404 from "./Pages/App404";
import Cart from "./Pages/Cart";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

import MainLayout from "./Pages/ManagerView/layout/MainLayout";
import MyFavoritesPage from "./Pages/MyFavoritesPage";
import ProductPage from "./Pages/ProductPage";
import ProductsCategory from "./Pages/ProductsCategory";
import Register from "./Pages/Register";
import HomePageSearchResult from "./Pages/SearchPageResult";

const CustomerRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: paths.index,
      element: <HomePage />
    },
    {
      path: paths.login,
      element: <LoginPage />
    },
    {
      path: paths.register,
      element: <Register />
    },
    {
      path: `${paths.product}/:id`,
      element: <ProductPage />
    },
    {
      path: `${paths.products}/:category`,
      element: <ProductsCategory />
    },
    {
      path: paths.searchResult,
      element: <HomePageSearchResult />
    },
    {
      path: paths.cart,
      element: <Cart />
    },
    {
      path: paths.favorites,
      element: <MyFavoritesPage />
    },
    {
      path: "*",
      element: <App404 />
    }
  ]
};

export default CustomerRoutes;
