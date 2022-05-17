import { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";

import MainCard from "../../ui-component/cards/MainCard";
import SecondaryAction from "../../ui-component/cards/CardSecondaryAction";
import AddProduct from "./ManageProductsTab/AddProduct";
import AllProducts from "./ManageProductsTab/AllProducts";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index &&
        <Box sx={{ p: 3 }}>
          <Typography>
            {children}
          </Typography>
        </Box>}
    </div>
  );
};

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`
});

const ManageProducts = () => {
  console.log("!");
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MainCard
      title="Basic Typography"
      secondary={
        <SecondaryAction link="https://next.material-ui.com/system/typography/" />
      }
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Add Product" {...a11yProps(0)} />
            <Tab label="All Products" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <AddProduct />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AllProducts />
        </TabPanel>
      </Box>
    </MainCard>
  );
};

export default ManageProducts;
