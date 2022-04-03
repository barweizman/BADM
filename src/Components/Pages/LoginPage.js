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

import { validateEmail, validatePassword } from "../../Constants/naming";
import Copyright from "../Copyright";
import paths from "../../Constants/paths";

const LoginPage = () => {
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [rememerMe, setRememberMe] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleValidationCheck = (email, password) => {
    if (!validateEmail.test(email)) {
      setEmailError(true);
      console.log("Email must be in valid format");
      return;
    }
    if (!validatePassword.test(password)) {
      setPasswordError(true);
      console.log(
        "Password not valid,must include minimum eight characters, at least one letter and one number"
      );
      return;
      // to do: add the pwd&email to DB
    }
    console.log("Validated");
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
    handleValidationCheck(data.email, data.password);
  };

  const handleToggleCheckBox = () => {
    setRememberMe(prevState => !prevState);
  };

  const handleNavigateToSignup = () => {
    navigate(paths.register);
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
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/javascriptblog-e9b5a.appspot.com/o/badm%2Fcup.png?alt=media&token=e0a775b9-f1f8-4e94-b814-716d1e42741e)",
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
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onFocus={() => setEmailError(false)}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={emailError}
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
                autoComplete="current-password"
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
                color="primary"
                variant="contained"
                sx={{ mt: 3, mb: 2, textTransform: "capitalize" }}
              >
                Sign In
              </Button>
              <Grid container justifyContent="center">
                <Button
                  onClick={handleNavigateToSignup}
                  sx={{ textTransform: "capitalize" }}
                >
                  Dont have an account? Sign Up
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

export default LoginPage;
