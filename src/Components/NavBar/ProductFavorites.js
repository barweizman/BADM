import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Favorite as FavoritesIcon } from "@mui/icons-material";

import paths from "../../Constants/paths";

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProductFavorites = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSearchClicked = () => {
    navigate(paths.favorites);
  };

  return (
    <Grid className={classes.root}>
      <IconButton onClick={handleSearchClicked}>
        <FavoritesIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
    </Grid>
  );
};

export default ProductFavorites;
