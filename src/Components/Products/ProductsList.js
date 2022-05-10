/* eslint-disable quotes */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ProductCard from "./ProductCard";
import SubTitle from "../SubTitle";

import { addToUserCart, getUserCart } from "../../store/reducers/appState";
import AppAlert from "../AppAlert";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
}));

const ProductsList = ({products, subTitle}) => {
  const classes = useStyles();
  const state = useSelector(s => s);
  const dispatch = useDispatch();
  const [addToCartAlert, setAddToCartAlert ] = useState(false);

  const userCart = getUserCart(state);
  const handleAddToCart = (product) => {
    dispatch(addToUserCart({product, quantity: 1}));
    setAddToCartAlert(true);
  }

  return (
      <>
      <AppAlert
       hide={2000}
      msg="Added to cart"
      open={addToCartAlert} 
      handleClose={() => setAddToCartAlert(false)} 
      />
      <SubTitle text={subTitle || "Featured Products"} />
    <Box component="div" className={classes.root}>
      {products.map(product =>
        <ProductCard 
        key={product._id} 
        id={product._id}
         img={product?.images[0] || ""}
        isInCart={userCart.products.findIndex(item => item?.product._id === product._id ) > -1} 
        handleAddToCart={() => handleAddToCart(product)}
        />
      )}
    </Box>
      </>

  );
};

export default ProductsList;
