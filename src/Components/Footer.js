import React from "react";
import {
  Box,
  Grid,
  IconButton,
  Typography,
  Avatar,
  Paper
} from "@mui/material";
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
      <Grid container spacing={5} justifyContent="space-around">
        {authours.map(author =>
          <Grid item>
            <Grid container justifyContent="center" mb={2} mt={2}>
              <Paper
                sx={{
                  borderRadius: theme.spacing(5),
                  width: theme.spacing(10),
                  height: theme.spacing(10),
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 3px 6px 2px #746D69"
                }}
              >
                <Box
                  component="img"
                  src={author.img}
                  sx={{
                    height: theme.spacing(10),
                    my: 4,
                    borderRadius: theme.spacing(5)
                  }}
                />
              </Paper>
            </Grid>
            <Typography textAlign="center" fontSize={15}>
              {author.name}
            </Typography>
            <Grid container justifyContent="center" mb={2} mt={2}>
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
                    width: "30px"
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
                    width: "30px"
                  }}
                />
              </IconButton>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Typography>
  );
};

export default Footer;
