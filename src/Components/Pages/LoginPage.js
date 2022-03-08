import React from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <Stack>
      <Typography textAlign="center" variant="h4" mt={2}>
        Login
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

export default LoginPage;
