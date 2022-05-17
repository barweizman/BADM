import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import theme from "../Constants/theme";

const useStyles = makeStyles(() => ({
  title: {
    fontSize: theme.spacing(4),
    fontFamily: ["Righteous", "Avenir Next"],
    fontWeight: 700,
    textTransform: "uppercase",
    fontStyle: "italic",
    letterSpacing: "0.05em",

    "&:before": {
      position: "absolute",
      left: 0,
      top: "1.2em",
      height: 0,
      width: "50px",
      borderBottom: "2px solid #f9dd94",
      display: "block",
      // eslint-disable-next-line quotes
      content: '""'
    }
  }
}));

const SubTitle = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography component="h2" textAlign="center" className={classes.title}>
      {text}
    </Typography>
  );
};

export default SubTitle;
