/* eslint-disable quotes */
import React, { useEffect, useState } from "react";
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

const ProductsList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = [
        {
          img:
            "https://images.pexels.com/photos/340996/pexels-photo-340996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          id: "1"
        },
        {
          img:
            "https://images.pexels.com/photos/3090893/pexels-photo-3090893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          id: "2"
        },
        {
          img:
            "https://images.pexels.com/photos/613182/pexels-photo-613182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          id: "3"
        }
      ];

      setProducts(data);
    };

    getProducts();
  }, []);

  return (
      <>
      <SubTitle text="Featured Products" />
    <Box component="div" className={classes.root}>
      {products.map(product =>
        <ProductCard id={product.id} img={product.img} key={product.id} />
      )}
    </Box>
      </>

  );
};

export default ProductsList;
