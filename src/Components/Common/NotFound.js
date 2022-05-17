import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SentimentVeryDissatisfied as SadIcon } from "@mui/icons-material";
import theme from "../../Constants/theme";

const useStyles = makeStyles(() => ({
  root: {}
}));

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <SadIcon
        sx={{
          height: theme.spacing(10),
          width: theme.spacing(10)
        }}
      />
      <Typography textAlign="center" variant="h5">
        Couldnt find any matching result :(
      </Typography>
    </Grid>
  );
};

export default NotFound;
