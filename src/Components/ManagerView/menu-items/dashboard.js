import { IconChartLine } from "@tabler/icons";
import paths from "../../../Constants/paths";

const icons = { IconChartLine };

const dashboard = {
  id: "dashboard",
  title: "Dashboard",
  type: "group",
  children: [
    {
      id: "default",
      title: "Statistics",
      type: "item",
      url: paths.index,
      icon: icons.IconChartLine,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
