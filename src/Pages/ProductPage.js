import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";

import Footer from "../Components/Common/Footer";
import FreeShippingBar from "../Components/Common/FreeShippingBar";
import MyNavbar from "../Components/NavBar/MyNavbar";
import NewsLetter from "../Components/Common/NewsLetter";
import Product from "../Components/Products/ProductInPage";
import ProductsList from "../Components/Products/ProductsList";

import {
  getFeaturedProducts,
  getProductById
} from "../services/serverServices";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await getFeaturedProducts();
      setFeaturedProducts(res.data);
    };

    getProducts();
  }, []);

  useEffect(
    () => {
      const func = async () => {
        const res = await getProductById(id);
        setProduct(res.data);
      };
      window.scrollTo(0, 0);
      func();
    },
    [id]
  );

  return (
    <Grid>
      <FreeShippingBar />
      <MyNavbar />
      {product !== undefined && <Product product={product} />}
      <ProductsList
        products={featuredProducts}
        subTitle="Recommended Products"
      />
      <NewsLetter />
      <Footer />
    </Grid>
  );
};

export default ProductPage;
