/* eslint-disable quotes */
import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProductCard from "./ProductCard";
import SubTitle from "../SubTitle";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
}));

const ProductsList = ({products}) => {
  const classes = useStyles();
  
  return (
      <>
      <SubTitle text="Featured Products" />
    <Box component="div" className={classes.root}>
      {products.map(product =>
        <ProductCard id={product._id} img={product?.images[0] || ""} key={product._id} />
      )}
    </Box>
      </>

  );
};

export default ProductsList;
