import React, { useState } from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { validateEmail } from "../../Constants/naming";

const LoginPage = () => {
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [passwordError,setPasswordError] = useState(false);
  const [emailError,setEmailError] = useState(false);
  const handleValidationCheck =()=>{
    if(!validatePassword.test(password)){
      setPasswordError(true);
      console.log("Password not valid,must include minimum eight characters, at least one letter and one number");
      return;
      // to do: add the pwd&email to DB
    }
    if(!validateEmail.test(email)){
      setEmailError(true);
      console.log("Email must be in valid format");
      return;
    }
  }  
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
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            error={setEmailError}
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
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
            error={setPasswordError}
            variant="outlined"
          />
        </Grid>
        <Button onClick={handleValidationCheck}>Login</Button> 
      </Grid>
    </Stack>
  );
};

export default LoginPage;
