import { Outlet } from "react-router-dom";

// project imports
import Customization from "../Customization";

const MinimalLayout = () => (
    <>
        <Outlet />
        <Customization />
    </>
);

export default MinimalLayout;
