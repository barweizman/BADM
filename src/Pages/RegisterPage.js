import  { useState } from "react";
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
  TextField,
  Typography,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  LockClockOutlined as LockOutlinedIcon,
} from "@mui/icons-material";

import { useDispatch } from "react-redux";
import { setUser } from "../store/reducers/generalReducer";

import theme from "../Constants/theme";

import { validateEmail, validatePassword } from "../Constants/validators";
import Copyright from "../Components/Common/Copyright";
import paths from "../Constants/paths";
import { registerUser } from "../services/serverServices";
import { rememberMeSession } from "../Constants/helpers";
import MyNavbar from "../Components/NavBar/MyNavbar";

const initialErrors = {
  email: false,
  password: false,
  name: false,
  failed: false,
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [rememerMe, setRememberMe] = useState(true);
  const [termsOfUse, setTermsOfUse] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleValidationCheck = async (
    email,
    password,
    name,
    passwordAgain
  ) => {
    if (!validateEmail.test(email)) {
      setFormErrors({ ...initialErrors, email: true });
      setErrorMsg("Email must be in valid format");
      return;
    }
    if (name.length === 0) {
      setFormErrors({ ...initialErrors, name: true });
      setErrorMsg("Name cannot be empty");
      return;
    }
    if (password.trim() !== passwordAgain.trim()) {
      setFormErrors({ ...initialErrors, password: true });
      setErrorMsg("Password doesn't match");
      return;
    }
    if (!validatePassword.test(password)) {
      setFormErrors({ ...initialErrors, password: true });
      setErrorMsg(
        "Password not valid,must include minimum eight characters, at least one letter and one number"
      );
      return;
    }
    setFormErrors({ ...initialErrors });
    setIsLoading(true);
    const res = await registerUser(email, password, name);
    setIsLoading(false);
    if (res.status === 200) {
      if (rememerMe) {
        rememberMeSession(res.data.jwt);
      }
      dispatch(setUser(res.data.user));
      navigate(paths.index);
    } else {
      setErrorMsg(res.msg);
      setFormErrors({ ...initialErrors, email: true });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    handleValidationCheck(
      data.get("email"),
      data.get("password"),
      data.get("name"),
      data.get("password-again")
    );
  };

  const handleToggleCheckBox = () => {
    setRememberMe((prevState) => !prevState);
  };

  const handleToggleTermsOfUser = () => {
    setTermsOfUse((prevState) => !prevState);
  }

  const handleNavigateToLogin = () => {
    navigate(paths.login);
  };

  return (
    <>
      <MyNavbar />
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
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 6,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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
                helperText={formErrors.email && errorMsg}
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
                helperText={formErrors.name && errorMsg}
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
                  endAdornment: passwordVisible ? (
                    <VisibilityOff
                      onClick={() => setPasswordVisible(false)}
                      sx={{ color: "lightgray" }}
                    />
                  ) : (
                    <Visibility
                      onClick={() => setPasswordVisible(true)}
                      sx={{ color: "lightgray" }}
                    />
                  ),
                }}
                onFocus={() => setFormErrors({ ...initialErrors })}
                name="password"
                label="Password"
                type={passwordVisible ? "text" : "password"}
                id="password"
                helperText={formErrors.password && errorMsg}
                autoComplete="current-password"
                sx={{ mt: 2 }}
              />
              <TextField
                margin="normal"
                required
                error={formErrors.password}
                fullWidth
                disabled={isLoading}
                InputProps={{
                  endAdornment: passwordVisible ? (
                    <VisibilityOff
                      onClick={() => setPasswordVisible(false)}
                      sx={{ color: "lightgray" }}
                    />
                  ) : (
                    <Visibility
                      onClick={() => setPasswordVisible(true)}
                      sx={{ color: "lightgray" }}
                    />
                  ),
                }}
                onFocus={() => setFormErrors({ ...initialErrors })}
                name="password-again"
                label="Write your password Again"
                type={passwordVisible ? "text" : "password"}
                id="password-again"
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
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsOfUse}
                    color="warning"
                    disabled={isLoading}
                    onChange={handleToggleTermsOfUser}
                  />
                }
                label={<span style={{color: "gray"}} >Terms of use</span>}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={isLoading || !termsOfUse}
                sx={{
                  mt: 3,
                  textTransform: "capitalize",
                  bgcolor: theme.palette.primary.main,
                }}
              >
                Sign Up
              </Button>
              {!termsOfUse && 
              <Typography variant="subtitle1" fontSize={11}  >
                You have to agree to our terms of use first
              </Typography>
              }
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
    </>
  );
};

export default Register;
