/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ProductCard from "./ProductCard";
import SubTitle from "../SubTitle";

import { addToUserCart, getUser, getUserCart } from "../../store/reducers/appState";
import AppAlert from "../AppAlert";
import { filters } from "../../Constants/naming";
import { addToUserFavoriteProducts } from "../../services/serverServices";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
}));

const ProductsList = ({products, subTitle, sortBy}) => {
  const classes = useStyles();
  const state = useSelector(s => s);
  const dispatch = useDispatch();
  
  const user = getUser(state);
  const [alertMessage, setAlertMessage ] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const userCart = getUserCart(state);
  
  const handleAddToCart = (product) => {
    dispatch(addToUserCart({product, quantity: 1}));
    setAlertMessage("Added to cart");
  }

  const handleAddToFavorites = async (productId) => {
    setAlertMessage("Added to favorites");
    addToUserFavoriteProducts(user._id, productId);
  }

  useEffect(() => {
    if (sortBy === filters.date) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
      );
    } else if (sortBy === filters.lowToHigh) {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => Number(a.price) - Number(b.price))
      );
    } else if(sortBy === filters.highToLow){
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => Number(b.price) - Number(a.price))
      );
    }
  }, [sortBy]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products])

  return (
      <>
      <AppAlert
       hide={2000}
      msg={alertMessage}
      open={alertMessage.length > 0} 
      handleClose={() => setAlertMessage("")} 
      />
      <SubTitle text={subTitle || "Featured Products"} />
    <Box component="div" className={classes.root}>
      {filteredProducts.length > 0 ? filteredProducts.map(product =>
        <ProductCard 
        key={product._id} 
        id={product._id}
         img={product?.images[0] || ""}
        isInCart={userCart.products.findIndex(item => item?.product._id === product._id ) > -1 || product.quantity === 0} 
        handleAddToCart={() => handleAddToCart(product)}
        handleAddToFavorites={() => handleAddToFavorites(product._id)}
        />
      ): products.map(product =>
          <ProductCard 
            key={product._id} 
            id={product._id}
            img={product?.images[0] || ""}
            isInCart={userCart.products.findIndex(item => item?.product._id === product._id ) > -1 || product.quantity === 0 } 
            handleAddToCart={() => handleAddToCart(product)}
            handleAddToFavorites={() => handleAddToFavorites(product._id)}
          />
        )
      }
    </Box>
      </>

  );
};

export default ProductsList;
