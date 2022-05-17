import { Box, Grid, Typography } from "@mui/material";
import AppDialog from "../AppDialog";
import theme from "../../Constants/theme";

const AgeDialog = ({ open, handleClose }) =>
  <AppDialog
    btnText="I'm over 18"
    open={open}
    handleClose={handleClose}
    title="Must be over 18 years old"
  >
    <Grid
      container
      sx={{ display: "flex" }}
      direction="column"
      alignItems="center"
    >
      <Typography textAlign="center">We sell Alchool!</Typography>
      <Typography textAlign="center">
        To be able to see this page You must be over 18 years old :)
      </Typography>
      <Box
        src="https://www.svgrepo.com/show/416520/animal-bear-cartoon.svg"
        component="img"
        alt="over18"
        sx={{
          width: theme.spacing(15),
          height: theme.spacing(15),
          mb: theme.spacing(5)
        }}
      />
    </Grid>
  </AppDialog>;

export default AgeDialog;
