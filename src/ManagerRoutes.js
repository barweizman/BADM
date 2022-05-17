import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import paths from "./Constants/paths";

import Loadable from "./Pages/ManagerView/ui-component/Loadable";

const DashboardDefault = Loadable(
  lazy(() => import("./Pages/ManagerView/views/dashboard/Default"))
);
const ProductsUtils = Loadable(
  lazy(() => import("./Pages/ManagerView/views/utilities/ManageProducts"))
);
const OrdersUtils = Loadable(
  lazy(() => import("./Pages/ManagerView/views/utilities/ManageOrders"))
);

// sample page routing
const UsersUtils = Loadable(
  lazy(() => import("./Pages/ManagerView/views/utilities/ManageUsers"))
);

const ManagerRoutes = () =>
  <Routes>
    <Route path={paths.index} element={<DashboardDefault />} />
    <Route path={paths.manageProducts} element={<ProductsUtils />} />
    <Route path={paths.manageUsers} element={<UsersUtils />} />
    <Route path={paths.manageOrders} element={<OrdersUtils />} />
  </Routes>;

export default ManagerRoutes;
