import React from "react";
import { Box, Typography } from "@mui/material";
import theme from "../Constants/theme";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: theme.spacing(50),
        backgroundColor: theme.palette.secondary.light
      }}
    >
      <Typography>Bar Alice David Maayan</Typography>
    </Box>
  );
};

export default Footer;
