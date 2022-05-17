import { useEffect, useState } from "react";
import { Divider, Grid } from "@mui/material";

import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";

import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/NewsLetter";
import { getFeaturedProducts } from "../services/serverServices";
import WhatsappButton from "../Components/Common/WhatsappButton";
import AppAnimation from "../Components/AppAnimation";
import theme from "../Constants/theme";

const App404 = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await getFeaturedProducts();
      setFeaturedProducts(res.data);
    };

    getProducts();
  }, []);

  return (
    <Grid>
      <FreeShipping />
      <MyNavbar />
      <Grid mt={theme.spacing(15)}>
        <AppAnimation title="We couldn't find the page you are looking for" />
      </Grid>
      <Divider sx={{ mb: theme.spacing(12), mt: theme.spacing(12) }} />
      <ProductsList subTitle="Featured Products" products={featuredProducts} />
      <NewsLetter />
      <Footer />
      <WhatsappButton />
    </Grid>
  );
};

export default App404;
