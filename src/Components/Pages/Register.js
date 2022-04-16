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

import { validateEmail, validatePassword } from "../../Constants/validators";
import Copyright from "../Copyright";
import paths from "../../Constants/paths";
import { registerUser } from "../../services/serverServices";
import { rememberMeSession } from "../../Constants/helpers";

const initialErrors = {
  email: false,
  password: false,
  name: false,
  failed: false
};

const Register = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [rememerMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleValidationCheck = async (email, password, name) => {
    if (!validateEmail.test(email)) {
      setFormErrors({ ...initialErrors, email: true });
      console.log("Email must be in valid format");
      return;
    }
    if (name.length === 0) {
      setFormErrors({ ...initialErrors, name: true });
    }
    if (!validatePassword.test(password)) {
      setFormErrors({ ...initialErrors, password: true });
      console.log(
        "Password not valid,must include minimum eight characters, at least one letter and one number"
      );
      return;
    }
    setFormErrors({ ...initialErrors });
    setIsLoading(true);
    const res = await registerUser(email, password);
    setIsLoading(false);
    if (res.status === 200) {
      if (rememerMe) {
        rememberMeSession(res.data.jwt);
      }
      navigate(paths.index);
    } else {
      setFormErrors({ ...initialErrors, failed: true });
    }
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
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/javascriptblog-e9b5a.appspot.com/o/badm%2Fmobile.png?alt=media&token=c3a39017-00a4-4ea1-a6d7-c66a59dbb30d)",
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
                disabled={isLoading}
                onFocus={() => setFormErrors({ ...initialErrors })}
                label="Email Address"
                name="email"
                autoFocus
                helperText={formErrors.failed && "User already exists"}
                error={formErrors.email || formErrors.failed}
                sx={{ mt: 1 }}
              />
              <TextField
                autoComplete="name"
                error={formErrors.name}
                fullWidth
                required
                disabled={isLoading}
                id="name"
                name="name"
                label="Name"
                type="name"
                onFocus={() => setFormErrors({ ...initialErrors })}
                variant="outlined"
                sx={{ mt: 1 }}
              />
              <TextField
                margin="normal"
                required
                error={formErrors.password}
                fullWidth
                disabled={isLoading}
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
                onFocus={() => setFormErrors({ ...initialErrors })}
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                helperText={
                  formErrors.password &&
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
                    color="primary"
                    disabled={isLoading}
                    onChange={handleToggleCheckBox}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading}
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
