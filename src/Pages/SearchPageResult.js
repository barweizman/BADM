import React, { useEffect, useState } from "react";
import { Divider, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";
import WhatsappButton from "../Components/WhatsappButton";
import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/NewsLetter";

import { getFeaturedProducts } from "../services/serverServices";
import { getSearchResultProduct } from "../store/reducers/appState";
import SearchBox from "../Components/SearchBox";
import theme from "../Constants/theme";
import NotFound from "../Components/Common/NotFound";

const HomePageSearchResult = () => {
  const state = useSelector(s => s);

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const searchResultProduct = getSearchResultProduct(state);

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
      <SearchBox />
      <Divider
        sx={{
          mb: theme.spacing(4)
        }}
      />
      {searchResultProduct.length === 0
        ? <NotFound />
        : <ProductsList subTitle=" " products={searchResultProduct} />}
      <Divider
        sx={{
          mb: theme.spacing(4),
          mt: theme.spacing(4)
        }}
      />
      <ProductsList subTitle="People Also Liked" products={featuredProducts} />
      <Divider
        sx={{
          mb: theme.spacing(4),
          mt: theme.spacing(4)
        }}
      />
      <NewsLetter />
      <Footer />
      <WhatsappButton />
    </Grid>
  );
};

export default HomePageSearchResult;
