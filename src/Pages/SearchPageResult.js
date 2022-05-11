import React, { useEffect, useState } from "react";
import { Divider, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import AppAnimation from "../Components/AppAnimation";
import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";
import WhatsappButton from "../Components/WhatsappButton";
import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/NewsLetter";
import ProductSortByOptions from "../Components/ProductSortByOptions";
import SearchBox from "../Components/SearchBox";

import { getFeaturedProducts } from "../services/serverServices";
import { getSearchResultProduct } from "../store/reducers/appState";
import theme from "../Constants/theme";

import SearchFailedAnimation from "../assets/animations/no-result.json"

const HomePageSearchResult = () => {
  const state = useSelector(s => s);

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [startedTyping, setStartedTyping] = useState(false);
  const searchResultProduct = getSearchResultProduct(state);

  useEffect(() => {
    const getProducts = async () => {
      const res = await getFeaturedProducts();
      setFeaturedProducts(res.data);
    };

    getProducts();
  }, []);

  useEffect(() => {
    setStartedTyping(true);
  }, [searchResultProduct])

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
      {searchResultProduct.length === 0 && startedTyping 
        ? <Grid mb={theme.spacing(10)} >
          <AppAnimation LottieCmp={SearchFailedAnimation} />
          </Grid>
        : <>
        <ProductSortByOptions sortBy={sortBy} handleSetSortBy={(val) => setSortBy(val)} />
        <ProductsList subTitle=" " products={searchResultProduct} sortBy={sortBy} />
        </>}
      <Divider
        sx={{ mb: theme.spacing(4), mt: theme.spacing(4)}}
      />
      <ProductsList subTitle="People Also Liked" products={featuredProducts} />
      <Divider
        sx={{ mb: theme.spacing(4), mt: theme.spacing(4) }}
      />
      <NewsLetter />
      <Footer />
      <WhatsappButton />
    </Grid>
  );
};

export default HomePageSearchResult;
