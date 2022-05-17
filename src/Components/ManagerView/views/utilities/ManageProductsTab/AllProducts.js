import { CircularProgress, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SubCard from "../../../ui-component/cards/SubCard";
import ProductCard from "./ProductCard";

const useStyles = makeStyles(() => ({
  root: {}
}));

const AllProducts = ({ isLoading, products }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      {isLoading &&
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>}
      <SubCard>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {products.map(product =>
            <Grid item xs={2} sm={4} md={4} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          )}
        </Grid>
      </SubCard>
    </Grid>
  );
};

export default AllProducts;
