import React, { useState } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { validateEmail, validatePassword } from "../../Constants/naming";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleValidationCheck = () => {
    if (!validatePassword.test(password)) {
      setPasswordError(true);
      console.log(
        "Password not valid,must include minimum eight characters, at least one letter and one number"
      );
      return;
      // to do: add the pwd&email to DB
    }
    if (!validateEmail.test(email)) {
      setEmailError(true);
      console.log("Email must be in valid format");
      return;
    }
    console.log("Validated");
  };
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
            error={emailError}
            id="outlined-email"
            onChange={event => setEmail(event.target.value)}
            onFocus={() => setEmailError(false)}
            label="Email"
            type="email"
            value={email}
            variant="outlined"
          />
        </Grid>
        <Grid mt={2} mb={2}>
          <TextField
            autoComplete="password"
            error={passwordError}
            id="outlined-password"
            InputProps={{
              endAdornment: passwordVisible
                ? <VisibilityOff
                    onClick={() => setPasswordVisible(false)}
                    sx={{ color: "lightgray" }}
                  />
                : <Visibility
                    onClick={() => setPasswordVisible(true)}
                    sx={{ color: "lightgray" }}
                  />
            }}
            onChange={event => setPassword(event.target.value)}
            onFocus={() => setPasswordError(false)}
            label="Password"
            type={passwordVisible ? "text" : "password"}
            value={password}
            variant="outlined"
          />
        </Grid>
        <Button onClick={handleValidationCheck} variant="contained">
          Login
        </Button>
      </Grid>
    </Stack>
  );
};

export default LoginPage;
