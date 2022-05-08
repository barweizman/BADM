/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide
} from "@mui/material";

const Transition = React.forwardRef((props, ref) =>
  <Slide direction="up" ref={ref} {...props} />
);

const AppDialog = ({ open, handleClose, title, children, btnText }) =>
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle sx={{ fontSize: 25, textAlign: "center", fontWeight: 500 }}>
      {title}
    </DialogTitle>
    <DialogContent>
      {children}
      {/* <DialogContentText id="alert-dialog-slide-description"> */}
      {/* </DialogContentText> */}
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} sx={{ textTransform: "capitalize" }}>
        {btnText || "Agree"}
      </Button>
    </DialogActions>
  </Dialog>;

export default AppDialog;
