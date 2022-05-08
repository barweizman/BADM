import React from "react";
import { IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { WhatsappOutlined } from "@mui/icons-material";
import { toWhatsappLink } from "../Constants/helpers";
// import { toWhatsappLink } from "../Constants/helpers";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "40px",
    right: "40px",
    backgroundColor: "#25d366",
    color: "#FFF",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 3px #999",
    zIndex: "100",
    "&:hover": {
      backgroundColor: "#075E54",
      cursor: "pointer"
    }
  }
}));

const WhatsappButton = () => {
  const classes = useStyles();

  return (
    <IconButton
      className={classes.root}
      rel="noopener noreferrer"
      target="_blank"
      href={toWhatsappLink("0542300378")}
    >
      <WhatsappOutlined fontSize="large" />
    </IconButton>
  );
};

export default WhatsappButton;
