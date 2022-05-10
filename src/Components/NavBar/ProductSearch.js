import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search as SearchIcon } from "@mui/icons-material";

import paths from "../../Constants/paths";

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProductSearch = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleSearchClicked = () => {
    navigate(paths.searchResult);
  };

  return (
    <Grid className={classes.root}>
      <IconButton onClick={handleSearchClicked}>
        <SearchIcon sx={{ color: "white" }} fontSize="large" />
      </IconButton>
    </Grid>
  );
};

export default ProductSearch;
