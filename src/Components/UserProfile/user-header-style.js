/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

const componentStyles = theme => ({
  wrapperBox: {
    [theme.breakpoints.up("md")]: {
      paddingTop: "8rem"
    },
    backgroundSize: "cover",
    backgroundPosition: "center top"
    // backgroundImage: "url(" + require("assets/profile-cover.jpg").default + ")"
  },
  overlayBox: {
    transition: "all .15s ease",
    opacity: ".9",
    background: "linear-gradient(to bottom right, #cc3300 0%, #0000cc 100%)"
    // background: "linear-gradient(87deg," + "#CC9C75" + ",#1a174d)!important"
  },
  containerRoot: {
    zIndex: 1,
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px"
    }
  },
  typographyRootH1: {
    color: "white",
    fontSize: "2.75rem",
    fontWeight: 600,
    lineHeight: 1.5
  },
  buttonRoot: {
    color: "white",
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.dark
    }
  }
});

export default componentStyles;
