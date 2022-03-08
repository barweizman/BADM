import React from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";

const Register = () => {
  return (
    <Stack>
      <Typography textAlign="center" variant="h4" mt={2}>
        Register
      </Typography>
      <Grid
        container
        justifyContenet="center"
        alignItems="center"
        direction="column"
      >
        <Grid mt={2} mb={2}>
          <TextField
            autoComplete="email"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
        </Grid>
        <Grid mt={2} mb={2}>
          <TextField
            autoComplete="name"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="name"
          />
        </Grid>
        <Grid mt={2} mb={2}>
          <TextField
            autoComplete="email"
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Register;
