import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  CssBaseline,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  LockClockOutlined as LockOutlinedIcon
} from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { setUser } from "../store/reducers/appState";

import { validateEmail } from "../Constants/validators";
import Copyright from "../Components/Copyright";
import paths from "../Constants/paths";
import { loginUser } from "../services/serverServices";
import MyNavbar from "../Components/MyNavbar";
import { rememberMeSession } from "../Constants/helpers";

const initialErrors = {
  email: false,
  password: false,
  notFound: false
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ ...initialErrors });

  const handleValidationCheck = async (email, password) => {
    if (!validateEmail.test(email)) {
      setErrors({ ...initialErrors, email: true });
      console.log("Email must be in valid format");
      return;
    }
    setIsLoading(true);
    const res = await loginUser(email, password);
    setIsLoading(false);
    if (res.status === 200) {
      if (rememberMe) {
        rememberMeSession(res.data.jwt);
      }
      dispatch(setUser(res.data.user));
      navigate(paths.index);
    } else {
      setErrors({ ...initialErrors, notFound: true });
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    handleValidationCheck(data.get("email"), data.get("password"));
  };

  const handleToggleCheckBox = () => {
    setRememberMe(prevState => !prevState);
  };

  const handleNavigateToSignup = () => {
    navigate(paths.register);
  };

  return (
    <>
    <MyNavbar />
      {isLoading && <CircularProgress />}
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
                onFocus={() => setErrors({ ...initialErrors })}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                helperText={errors.notFound && "User doesn't exists"}
                error={errors.email || errors.notFound}
              />
              <TextField
                margin="normal"
                required
                error={errors.password || errors.notFound}
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
                onFocus={() => setErrors({ ...initialErrors })}
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rememberMe}
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
    </>
  );
};

export default LoginPage;
