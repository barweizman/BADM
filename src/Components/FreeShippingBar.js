import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: theme.spacing(5),
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: theme.spacing(3),
    fontWeight: 500
  }
}));

const FreeShippingBar = () => {
  const classes = useStyles();

  return <Grid className={classes.root}>Free shipping on orders over 50$</Grid>;
};

export default FreeShippingBar;
