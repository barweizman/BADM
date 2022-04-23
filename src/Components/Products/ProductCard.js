import React from "react";
import { Link } from "react-router-dom";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Favorite, Search, ShoppingCart } from "@mui/icons-material";

import paths from "../../Constants/paths";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    margin: "5px",
    minWidth: "280px",
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5fbfd",
    position: "relative",
    "&:hover": {
      "& $info": {
        opacity: 1
      }
    }
  },
  circle: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "white",
    position: "absolute"
  },
  info: {
    opacity: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    zIndex: 3,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.5s ease",
    cursor: "pointer"
  },
  image: {
    height: "75%",
    zIndex: 2
  },
  icon: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "10px",
    transition: "all 0.5s ease",
    "&:hover": {
      backgroundColor: "#e9f5f5",
      transform: "scale(1.1)"
    }
  }
}));

const ProductCard = ({ id, img }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.container}>
      <Box component="div" className={classes.circle} />
      <Box component="img" className={classes.container} src={img} />
      <Box component="div" className={classes.info}>
        <Box component="div" className={classes.icon}>
          <ShoppingCart />
        </Box>
        <Box component="div" className={classes.icon}>
          <Link to={`${paths.product}/${id}`}>
            <Search />
          </Link>
        </Box>
        <Box component="div" className={classes.icon}>
          <Favorite />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
