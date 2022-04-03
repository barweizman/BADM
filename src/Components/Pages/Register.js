import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  LockClockOutlined as LockOutlinedIcon
} from "@mui/icons-material";

import theme from "../../Constants/theme";

import { validateEmail, validatePassword } from "../../Constants/naming";
import Copyright from "../Copyright";
import paths from "../../Constants/paths";

const Register = () => {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [rememerMe, setRememberMe] = useState(true);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleValidationCheck = (email, password, name) => {
    if (!validateEmail.test(email)) {
      setEmailError(true);
      console.log("Email must be in valid format");
      return;
    }
    if (name.length === 0) {
      setNameError(true);
    }
    if (!validatePassword.test(password)) {
      setPasswordError(true);
      console.log(
        "Password not valid,must include minimum eight characters, at least one letter and one number"
      );
      return;
      // to do: add the pwd&email to DB
    }

    console.log("Valid");
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
      name: data.get("name")
    });
    handleValidationCheck(
      data.get("email"),
      data.get("password"),
      data.get("name")
    );
  };

  const handleToggleCheckBox = () => {
    setRememberMe(prevState => !prevState);
  };

  const handleNavigateToLogin = () => {
    navigate(paths.login);
  };

  return (
    <Stack>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(../images/mobile.png)",
            backgroundRepeat: "no-repeat",
            // eslint-disable-next-line no-confusing-arrow
            backgroundColor: t =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: theme.palette.primary.main }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                autoComplete="email"
                margin="normal"
                required
                fullWidth
                id="email"
                onFocus={() => setEmailError(false)}
                label="Email Address"
                name="email"
                autoFocus
                error={emailError}
                sx={{ mt: 1 }}
              />
              <TextField
                autoComplete="name"
                error={nameError}
                fullWidth
                required
                id="name"
                name="name"
                label="Name"
                type="name"
                onFocus={() => setNameError(false)}
                variant="outlined"
                sx={{ mt: 1 }}
              />
              <TextField
                margin="normal"
                required
                error={passwordError}
                fullWidth
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
                onFocus={() => setPasswordError(false)}
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                helperText={
                  passwordError &&
                  `Password not valid,must include minimum eight characters, at
                least one letter and one number`
                }
                autoComplete="current-password"
                sx={{ mt: 2 }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememerMe}
                    onChange={handleToggleCheckBox}
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  textTransform: "capitalize",
                  bgcolor: theme.palette.primary.main
                }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Button
                  onClick={handleNavigateToLogin}
                  sx={{ textTransform: "capitalize" }}
                >
                  Already a member? Login
                </Button>
              </Grid>
              <Copyright />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Register;
