import React from "react";
import { Box, Grid, IconButton, Typography, Avatar } from "@mui/material";
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
        height: theme.spacing(30),
      }}
    >
      <Grid container spacing={5} justifyContent="space-around">
        {authours.map((author) => (
          <Grid item>
            <Avatar src={author.img} />
            <Typography textAlign="center">{author.name}</Typography>
            <IconButton
              style={{ marginRight: theme.spacing(2) }}
              rel="noopener noreferrer"
              target="_blank"
              href={author.linkedin}
            >
              <Box
                component="img"
                src={LINKEDIN_ICON}
                sx={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </IconButton>
            <IconButton
              style={{ marginRight: theme.spacing(2) }}
              rel="noopener noreferrer"
              target="_blank"
              href={author.github}
            >
              <Box
                component="img"
                src={GITHUB_ICON}
                sx={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Typography>
  );
};

export default Footer;
