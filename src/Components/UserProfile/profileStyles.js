/* eslint-disable prefer-template */
import boxShadows from "./box-shadow";
import theme from "../../Constants/theme";

const componentStyles = () => ({
  cardRoot: {
    boxShadow: boxShadows.boxShadow + "!important",
    border: "0!important"
  },
  cardRootSecondary: {
    backgroundColor: theme.palette.secondary.main
  },
  cardHeaderRoot: {
    backgroundColor: "white"
  },
  containerRoot: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "39px",
      paddingRight: "39px"
    }
  },
  gridItemRoot: {
    [theme.breakpoints.up("xl")]: {
      marginBottom: "0!important"
    }
  },
  typographyRootH6: {
    textTransform: "uppercase"
  },
  plLg4: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "1.5rem"
    }
  },
  ptMd4: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: "1.5rem!important"
    }
  },
  mtMd5: {
    [theme.breakpoints.up("sm")]: {
      paddingTop: "3rem!important"
    }
  },
  cardHeaderRootProfile: {
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "1.5rem!important",
      paddingTop: "1.5rem!important"
    }
  },
  buttonRootInfo: {
    color: "white",
    backgroundColor: theme.palette.info.main,
    "&:hover": {
      backgroundColor: theme.palette.info.main
    }
  },
  buttonRootDark: {
    color: "white",
    backgroundColor: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main
    }
  },
  profileImage: {
    verticalAlign: "middle",
    borderStyle: "none",
    transform: "translate(-50%,-30%)",
    transition: "all .15s ease"
  },
  cardProfileLink: {
    color: theme.palette.primary.main,
    backgroundColor: "initial",
    textDecoration: "none",
    fontSize: "1rem",
    "&:hover": {
      color: theme.palette.primary.dark
    }
  },
  order1: {
    [theme.breakpoints.down("lg")]: {
      order: "1!important"
    }
  },
  order2: {
    [theme.breakpoints.down("lg")]: {
      order: "2!important"
    }
  },
  marginBottomXl0: {
    [theme.breakpoints.up("lg")]: {
      marginBottom: "0!important"
    }
  }
});

export default componentStyles;
