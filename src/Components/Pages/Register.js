import React from "react";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { validateEmail, validatePassword } from "../../Constants/naming";

const Register = () => {
  const [password,setpassword] = useState("");
  const [email,setemail] = useState("");
  const [name,setname] = useState("");
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
            value={email}
            onChange={(event)=>setemail(event.target.value)}
            error={setEmailError}
            variant="outlined"
            type="email"
          />
        </Grid>
        <Grid mt={2} mb={2}>
          <TextField
            autoComplete="name"
            id="outlined-basic"
            label="Name"
            value={name}
            onChange={(event)=>setname(event.target.value)}
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
            value={password}
            onChange={(event)=>setpassword(event.target.value)}
            error={setPasswordError}
            variant="outlined"
          />
        </Grid>
        <Button onClick={handleValidationCheck}>Submit</Button> 
      </Grid>
    </Stack>
  );
};

export default Register;
