import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import CategoriesList from "../Components/Categories/CategoriesList";
import Footer from "../Components/Common/Footer";
import FreeShipping from "../Components/Common/FreeShippingBar";
import MyNavbar from "../Components/NavBar/MyNavbar";
import Slider from "../Components/CustomerView/HomePage/Slider";

import { categories, sliderItems } from "../Constants/data";
import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/Common/NewsLetter";
import { getFeaturedProducts } from "../services/serverServices";
import WhatsappButton from "../Components/Common/WhatsappButton";

const HomePage = () => {
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
      <Slider sliderItems={sliderItems} />
      <CategoriesList categories={categories} />
      <ProductsList products={featuredProducts} />
      <NewsLetter />
      <Footer />
      <WhatsappButton />
    </Grid>
  );
};

export default HomePage;
