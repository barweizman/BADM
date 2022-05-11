import React, { useEffect, useState } from "react";
import { Box, Divider, Grid } from "@mui/material";
import { useSelector } from "react-redux";

import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";
import WhatsappButton from "../Components/WhatsappButton";
import ProductsList from "../Components/Products/ProductsList";
import NewsLetter from "../Components/NewsLetter";

import EmptyFavoritesAnimation from "../assets/animations/empty-favorite.json"

import {
  getFeaturedProducts,
  getUserFavoriteProducts
} from "../services/serverServices";

import theme from "../Constants/theme";
import { getUser } from "../store/reducers/appState";
import AppAnimation from "../Components/AppAnimation";

const MyFavoritesPage = () => {
  const state = useSelector(s => s);
  const user = getUser(state);

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

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
        const res = await getUserFavoriteProducts(user?._id);
        setFavoriteProducts(res.data);
      };
      if (user) {
        getCategoryProducts();
      }
    },
    [user]
  );

  return (
    <Grid>
      <FreeShipping />
      <MyNavbar />
      <Box mt={theme.spacing(10)} />
        <ProductsList subTitle="Your Favorites" products={favoriteProducts} />
        {
        favoriteProducts?.length === 0 && 
        <AppAnimation title="Favorite list is empty" LottieCmp={EmptyFavoritesAnimation} />
        }
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

export default MyFavoritesPage;