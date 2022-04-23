import React, { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Send } from "@mui/icons-material";

import { getIsMobile } from "../Constants/helpers";
import theme from "../Constants/theme";

// eslint-disable-next-line no-shadow
const useStyles = makeStyles(theme => ({
  title: {
    fontSize: "70px",
    marginBottom: "20px"
  },
  description: {
    fontSize: "24px",
    fontWeight: 300,
    marginBottom: "20px"
    // ${mobile({ textAlign: "center" })}
  },
  input: {
    border: "none",
    flex: 8,
    paddingLeft: "20px"
  },
  btn: {
    flex: 1,
    border: "none",
    backgroundColor: theme.palette.secondary.dark,
    color: "white"
  }
}));

const StyledInputContainer = styled(Box)(({ isMobile }) => ({
  width: isMobile ? "70%" : "50%",
  height: "40px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  border: "1px solid lightgray"
}));

const StyledDescription = styled(Box)(({ isMobile }) => ({
  fontSize: "24px",
  fontWeight: 300,
  marginBottom: "20px",
  width: isMobile && "70%",
  textAlign: "start"
}));

const StyledTitle = styled(Typography)(({ isMobile }) => ({
  fontSize: isMobile ? "40px" : "70px",
  marginBottom: "20px",
  width: isMobile && "60%"
}));

const StyledContainer = styled(Typography)(({ isMobile }) => ({
  height: "60vh",
  backgroundColor: theme.palette.secondary.main,
  display: "flex",
  alignItems: !isMobile && "center",
  justifyContent: "center",
  flexDirection: "column",
  borderTopRightRadius: theme.spacing(80),
  marginTop: theme.spacing(6),
  marginLeft: isMobile && theme.spacing(2)
}));

const NewsLetter = () => {
  const classes = useStyles();
  const [isMobile] = useState(getIsMobile());

  return (
    <StyledContainer component="div" isMobile={isMobile}>
      <StyledTitle component="h1" isMobile={isMobile}>
        Our Newsletter{" "}
      </StyledTitle>
      <StyledDescription component="div" isMobile={isMobile}>
        Subscribe now and get updated with our latest promotions
      </StyledDescription>
      <StyledInputContainer component="div" isMobile={isMobile}>
        <Box
          component="input"
          placeholder="Your Email"
          className={classes.input}
        />
        <Button className={classes.btn}>
          <Send />
        </Button>
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default NewsLetter;
