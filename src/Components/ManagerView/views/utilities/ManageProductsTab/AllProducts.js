import { useState } from "react"
import { CircularProgress, Grid } from "@mui/material";

import EditProductDialog from "./EditProductDialog";
import ProductCard from "./ProductCard";
import SubCard from "../../../ui-component/cards/SubCard";


const AllProducts = ({ isLoading, products, refetchProducts }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(undefined);

  const onProductClick = (product) => {
    setDialogOpen(true);
    setCurrentProduct(product)
  }

  return (
    <>
    <Grid>
      {isLoading &&
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>}
      <SubCard>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map(product =>
            <Grid item xs={2} sm={4} md={4} key={product._id}>
              <ProductCard product={product} onClick={() => onProductClick(product)} />
            </Grid>
          )}
        </Grid>
      </SubCard>
    </Grid>
    <EditProductDialog 
      open={dialogOpen} 
      handleClose={() => {
        setDialogOpen(false);
        setCurrentProduct(undefined);
        refetchProducts();
      }} 
      product={currentProduct} 
    />
    </>
  );
};

export default AllProducts;
