import React from "react";
import { Grid } from "@mui/material";

import CategoriesList from "../Components/Categories/CategoriesList";
import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShipping";
import MyNavbar from "../Components/MyNavbar";
import Slider from "../Components/Slider";

import { categories, sliderItems } from "../Constants/data";

console.log(sliderItems);

const HomePage = () =>
  <Grid>
    <FreeShipping />
    <MyNavbar />
    <Slider sliderItems={sliderItems} />
    <CategoriesList categories={categories} />
    <Footer />
  </Grid>;

export default HomePage;
