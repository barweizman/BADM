import React from "react";
import { Grid } from "@mui/material";

import CategoriesList from "../Components/Categories/CategoriesList";
import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";
import Slider from "../Components/Slider";

import { categories, sliderItems } from "../Constants/data";
import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/NewsLetter";

console.log(sliderItems);

const HomePage = () =>
  <Grid>
    <FreeShipping />
    <MyNavbar />
    <Slider sliderItems={sliderItems} />
    <CategoriesList categories={categories} />
    <ProductsList />
    <NewsLetter />
    <Footer />
  </Grid>;

export default HomePage;
