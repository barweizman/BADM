import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import paths from "../Constants/paths";

import Loadable from "../Components/ManagerView/ui-component/Loadable";

const DashboardDefault = Loadable(
  lazy(() => import("../Pages/ManagerDashboardPage"))
);
const ProductsUtils = Loadable(
  lazy(() => import("../Pages/ManageProductsPage"))
);
const OrdersUtils = Loadable(lazy(() => import("../Pages/ManageOrdersPage")));

// sample page routing
const UsersUtils = Loadable(lazy(() => import("../Pages/ManageUsersPage")));

const ManagerRoutes = () =>
  <Routes>
    <Route path={paths.index} element={<DashboardDefault />} />
    <Route path={paths.manageProducts} element={<ProductsUtils />} />
    <Route path={paths.manageUsers} element={<UsersUtils />} />
    <Route path={paths.manageOrders} element={<OrdersUtils />} />
  </Routes>;

export default ManagerRoutes;
