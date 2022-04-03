import React from "react";
import { Typography } from "@mui/material";

const Copyright = () =>
  <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    sx={{ mt: 5 }}
  >
    Copyright ©{"    "}
    <Typography variant="caption">BADM - Tubi or not To Be{"   "}</Typography>
    {new Date().getFullYear()}
  </Typography>;

export default Copyright;
