import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {}
}));

const AllProducts = () => {
  const classes = useStyles();
  return <Grid className={classes.root}>All Products</Grid>;
};

export default AllProducts;
