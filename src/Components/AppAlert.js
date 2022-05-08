/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Alert, Slide, Snackbar } from "@mui/material";

function SlideTransition(props) {
  return <Slide {...props} direction="down" />;
}

const AppAlert = ({ msg, open, hide, variant, severity, handleClose }) =>
  <Snackbar
    open={open}
    autoHideDuration={hide || 4000}
    onClose={handleClose}
    TransitionComponent={SlideTransition}
    anchorOrigin={{ horizontal: "center", vertical: "top" }}
  >
    <Alert variant={variant || "filled"} severity={severity || "success"}>
      {msg}
    </Alert>
  </Snackbar>;

export default AppAlert;
