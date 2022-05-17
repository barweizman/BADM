import  { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Send } from "@mui/icons-material";

import { getIsMobile } from "../Constants/helpers";
import theme from "../Constants/theme";
import { joinNewsletter } from "../services/serverServices";
import { validateEmail } from "../Constants/validators";
import AppAlert from "./AppAlert";

// eslint-disable-next-line no-shadow
const useStyles = makeStyles(() => ({
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
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmitEmail = async () => {
    if (!validateEmail.test(email)) {
      setEmailErr("Email is not valid");
      return;
    }
    const res = await joinNewsletter(email);
    if (res.status === 200) {
      setIsDialogOpen(true);
      setEmail("");
    } else {
      setEmailErr(res.msg);
    }
  };

  return (
    <>
    <AppAlert
     open={isDialogOpen}
     handleClose={() => setIsDialogOpen(false)} 
     msg="Joined successfully to our list. Check your email for a 10% off your first order :)"
     />
    <StyledContainer component="div" isMobile={isMobile}>
      <StyledTitle component="h1" isMobile={isMobile}>
        Our Newsletter
      </StyledTitle>
      <StyledDescription component="div" isMobile={isMobile}>
        Subscribe now and get updated with our latest promotions
      </StyledDescription>
      <StyledInputContainer component="div" isMobile={isMobile}>
        <Box
          autoComplete="email"
          component="input"
          placeholder="Your Email"
          className={classes.input}
          onChange={e => setEmail(e.target.value)}
          value={email}
          onFocus={() => setEmailErr(undefined)}
        />
        <Button
          className={classes.btn}
          onClick={handleSubmitEmail}
          sx={{
            color: theme.palette.error
          }}
        >
          <Send />
        </Button>
      </StyledInputContainer>
      {emailErr &&
        <Typography fontSize={12} variant="subtitle1" color="error">
          {emailErr}
        </Typography>}
    </StyledContainer>
    </>
  );
};

export default NewsLetter;
