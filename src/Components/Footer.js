import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../Constants/theme";
import { authours, GITHUB_ICON, LINKEDIN_ICON } from "../Constants/naming";

const Footer = () => {
  return (
    <Typography
      component="footer"
      sx={{
        display: "flex",
        position: "sticky",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        height: theme.spacing(30)
      }}
    >
      <Grid container spacing={5} justifyContent="space-around" />
    </Typography>
  );
};

export default Footer;
