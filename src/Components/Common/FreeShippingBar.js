import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import theme from "../../Constants/theme";

const useStyles = makeStyles(() => ({
  root: {
    height: theme.spacing(5),
    backgroundColor: theme.palette.secondary.main,
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
