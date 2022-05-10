import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import paths from "../../Constants/paths";

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    margin: "3px",
    height: "70vh",
    position: "relative"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
    // ${mobile({ height: "20vh" })}
  },
  info: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "white",
    marginBottom: "20px",
    fontSize: theme.spacing(4)
  },
  btn: {
    border: "none",
    padding: "10px",
    backgroundColor: theme.palette.teal.main,
    color: "white",
    cursor: "pointer",
    fontWeight: 600,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark
    }
  }
}));

const CategoryItem = ({ img, title, categoryName }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Link to={`${paths.products}/${categoryName}`}>
        <Box component="img" src={img} className={classes.img} />
        <Grid className={classes.info}>
          <Typography
            component="h3"
            className={classes.title}
            textTransform="capitalize"
            textAlign="center"
          >
            {title}
          </Typography>
          <Button className={classes.btn}>Shop Now</Button>
        </Grid>
      </Link>
    </Grid>
  );
};

CategoryItem.propTypes = {
  img: PropTypes.string,
  categoryName: PropTypes.string,
  title: PropTypes.string
};

CategoryItem.defaultProps = {
  img: "",
  categoryName: "",
  title: ""
};

export default CategoryItem;
