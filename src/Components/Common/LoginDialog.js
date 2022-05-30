import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField
} from "@mui/material";

const LoginDialog = ({
  open,
  handleClose,
  handleLogin,
  errors,
  isLoading,
  resetErrors
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <DialogContentText>
          In order to make an order you need to be logged in
        </DialogContentText>
        <Grid sx={{ width: "50%" }}>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            error={errors.email}
            value={email}
            onFocus={() => resetErrors()}
            onChange={e => setEmail(e.target.value)}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            error={errors.password}
            onFocus={() => resetErrors()}
            value={password}
            onChange={e => setPassword(e.target.value)}
            variant="standard"
          />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          onClick={() => handleLogin(email, password)}
          disabled={isLoading}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
