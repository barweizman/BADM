import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import CategoriesList from "../Components/Categories/CategoriesList";
import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";
import Slider from "../Components/Slider";

import { categories, sliderItems } from "../Constants/data";
import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/NewsLetter";
import { getFeaturedProducts } from "../services/serverServices";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await getFeaturedProducts();
      setFeaturedProducts(res.data);
      console.log(res.data);
    };

    getProducts();
  }, []);

  return (
    <Grid>
      <FreeShipping />
      <MyNavbar />
      <Slider sliderItems={sliderItems} />
      <CategoriesList categories={categories} />
      <ProductsList products={featuredProducts} />
      <NewsLetter />
      <Footer />
    </Grid>
  );
};

export default HomePage;
