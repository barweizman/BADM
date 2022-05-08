import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import FreeShippingBar from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";
import NewsLetter from "../Components/NewsLetter";
import Product from "../Components/Products/Product";
import { getProductById } from "../services/serverServices";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const func = async () => {
      const res = await getProductById(id);
      console.log(res);
      setProduct(res.data);
    };

    func();
  }, []);
  return (
    <Grid>
      <FreeShippingBar />
      <MyNavbar />
      {product !== undefined && <Product product={product} />}
      <NewsLetter />
      <Footer />
    </Grid>
  );
};

export default ProductPage;
