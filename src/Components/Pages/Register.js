import React, { useState } from "react";
import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { validateEmail, validatePassword } from "../../Constants/naming";

const Register = () => {
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
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

    console.log("Valid");
  };
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
            error={emailError}
            id="outlined-email"
            label="Email"
            onChange={event => setemail(event.target.value)}
            onFocus={() => setEmailError(false)}
            type="email"
            value={email}
            variant="outlined"
          />
        </Grid>
        <Grid mt={2} mb={2}>
          <TextField
            autoComplete="fname"
            id="outlined-name"
            onChange={event => setname(event.target.value)}
            label="Name"
            type="name"
            value={name}
            variant="outlined"
          />
        </Grid>
        <Grid mt={2}>
          <TextField
            autoComplete="password"
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
            label="Password"
            type="password"
            value={password}
            onChange={event => setpassword(event.target.value)}
            onFocus={() => setPasswordError(false)}
            error={passwordError}
            variant="outlined"
          />
        </Grid>
        <Grid item mb={2} maxWidth="50%">
          {passwordError &&
            <Typography textAlign="center" color="red" fontSize={11}>
              Password not valid,must include minimum eight characters, at least
              one letter and one number
            </Typography>}
        </Grid>
        <Button onClick={handleValidationCheck} variant="contained">
          Submit
        </Button>
      </Grid>
    </Stack>
  );
};

export default Register;
