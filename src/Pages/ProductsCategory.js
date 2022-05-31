import { useEffect, useState } from "react";
import { Box, Divider, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

import Footer from "../Components/Common/Footer";
import FreeShipping from "../Components/Common/FreeShippingBar";
import MyNavbar from "../Components/NavBar/MyNavbar";
import WhatsappButton from "../Components/Common/WhatsappButton";
import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/Common/NewsLetter";

import {
  getAllProducts,
  getFeaturedProducts
} from "../services/serverServices";
import theme from "../Constants/theme";

const ProductsCategory = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    const getFeatured = async () => {
      const res = await getFeaturedProducts();
      setFeaturedProducts(res.data);
    };
    window.scrollTo(0, 0);

    getFeatured();
  }, []);

  useEffect(
    () => {
      const getCategoryProducts = async () => {
        const res = await getAllProducts(category);
        console.log(res.data);
        setCategoryProducts(res.data);
      };

      getCategoryProducts();
    },
    [category]
  );

  return (
    <Grid>
      <FreeShipping />
      <MyNavbar />
      <Box mt={theme.spacing(10)} />
      <ProductsList
        subTitle={`Our ${category} Collection`}
        products={categoryProducts}
      />
      <Divider
        sx={{
          mb: theme.spacing(4),
          mt: theme.spacing(4)
        }}
      />
      <ProductsList subTitle="People Also Liked" products={featuredProducts} />
      <NewsLetter />
      <Footer />
      <WhatsappButton />
    </Grid>
  );
};

export default ProductsCategory;
