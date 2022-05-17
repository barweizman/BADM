import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Search } from "@mui/icons-material";

import { DEBOUNCE_TIME } from "../Constants/naming";
import {
  getSearchProdValue,
  setSearchProdValue,
  setSearchResultProducts
} from "../store/reducers/generalReducer";
import { getSearchedProduct } from "../services/serverServices";
import theme from "../Constants/theme";

const useStyles = makeStyles(() => ({
  root: {}
}));

const SearchBox = () => {
  const classes = useStyles();
  const state = useSelector(s => s);
  const dispatch = useDispatch();

  const searchText = getSearchProdValue(state);

  const setSearchText = val => {
    dispatch(setSearchProdValue(val));
  };

  let searchDebounce;
  const handleSearch = val => {
    // only start searching when search length is bigger than 1
    // debounce is 300.
    clearTimeout(searchDebounce);
    searchDebounce = setTimeout(() => {
      setSearchText(val);
    }, DEBOUNCE_TIME);
  };

  useEffect(
    () => {
      const func = async () => {
        const res = await getSearchedProduct(searchText);
        if (res.status === 200) {
          dispatch(setSearchResultProducts(res.data));
        }
      };
      if (searchText.length > 0) {
        func();
      }
    },
    [searchText]
  );

  return (
    <Grid
      container
      mt={theme.spacing(5)}
      mb={theme.spacing(5)}
      justifyContent="center"
      className={classes.root}
    >
      <Grid width="50%">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center"
          }}
        >
          <Search
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
            fontSize="large"
          />
          <TextField
            variant="outlined"
            sx={{ borderRadius: theme.spacing(2) }}
            fullWidth
            defaultValue={searchText}
            onChange={e => handleSearch(e.target.value)}
            label="Search for a product"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
