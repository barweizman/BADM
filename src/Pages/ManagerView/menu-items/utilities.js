import {
  IconBuildingStore,
  IconFriends,
  IconBusinessplan
} from "@tabler/icons";
import paths from "../../../Constants/paths";

const icons = {
  IconFriends,
  IconBuildingStore,
  IconBusinessplan
};

const utilities = {
  id: "utilities",
  title: "Utilities",
  type: "group",
  children: [
    {
      id: "util-products",
      title: "Add Product",
      type: "item",
      url: paths.manageProducts,
      icon: icons.IconBuildingStore,
      breadcrumbs: false
    },
    {
      id: "util-users",
      title: "Users",
      type: "item",
      url: paths.manageUsers,
      icon: icons.IconFriends,
      breadcrumbs: false
    },
    {
      id: "util-orders",
      title: "Orders",
      type: "item",
      url: paths.manageOrders,
      icon: icons.IconBusinessplan,
      breadcrumbs: false
    }
  ]
};

export default utilities;
