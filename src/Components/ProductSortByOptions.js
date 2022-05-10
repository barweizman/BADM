import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { filters } from "../Constants/naming";
import theme from "../Constants/theme";

const filterOptions = [
  { key: 1, val: filters.date, name: "Date" },
  { key: 2, val: filters.highToLow, name: "Price: high to low" },
  { key: 3, val: filters.lowToHigh, name: "Price: low to high" }
];

const ProductSortByOptions = ({ sortBy, handleSetSortBy }) => {
  const handleChange = val => {
    handleSetSortBy(val);
  };

  return (
    <Box sx={{ maxWidth: 150, ml: theme.spacing(2) }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Age"
          onChange={e => handleChange(e.target.value)}
        >
          {filterOptions.map(option =>
            <MenuItem value={option.val} key={option.key}>
              {option.name}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductSortByOptions;
