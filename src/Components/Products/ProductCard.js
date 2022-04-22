import React from "react";
import PropTypes from "prop-types";
import { createStyles, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      backgroundColor: theme.palette.red
    }
  })
);

const ProductCard = ({ description, img, price, title }) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography>
        {title}
      </Typography>
      <Typography>
        {price}
      </Typography>
      <Typography>
        {description}
      </Typography>
      <Typography>
        {img}
      </Typography>
    </Grid>
  );
};

ProductCard.propTypes = {
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  title: PropTypes.string
};

ProductCard.defaultProps = {
  description: "",
  img: "",
  price: "",
  title: ""
};

export default ProductCard;
