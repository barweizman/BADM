import { useEffect, useState } from "react";
import { Box, Icon, Tab, Tabs, Typography } from "@mui/material";

import MainCard from "../Components/ManagerView/ui-component/cards/MainCard";
import SecondaryAction from "../Components/ManagerView/ui-component/cards/CardSecondaryAction";
import AddProduct from "../Components/ManagerView/views/utilities/ManageProductsTab/AddProduct";
import AllProducts from "../Components/ManagerView/views/utilities/ManageProductsTab/AllProducts";
import { getAllProducts } from "../services/serverServices";

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
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fun = async () => {
      setIsLoading(true);
      const res = await getAllProducts(null, null, null, true);
      setIsLoading(false);

      if (res.status === 200) {
        setProducts(res.data);
      } else {
        // error
      }
    };
    fun();
  }, []);

  return (
    <MainCard
      title="Manage Products"
      secondary={
        <SecondaryAction src="https://www.svgrepo.com/show/184613/wine.svg" />
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
          <AllProducts products={products} isLoading={isLoading} />
        </TabPanel>
      </Box>
    </MainCard>
  );
};

export default ManageProducts;
