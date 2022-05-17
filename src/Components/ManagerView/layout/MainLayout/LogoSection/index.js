import { Link } from "react-router-dom";
import { ButtonBase, Typography } from "@mui/material";

import Logo from "../../../ui-component/Logo";
import paths from "../../../../../Constants/paths";

const LogoSection = () =>
  <ButtonBase disableRipple component={Link} to={paths.index}>
    <Logo />
    <Typography
      ml={5}
      variant="subtitle1"
      sx={{
        fontFamily: ["Raleway", "sans-serif"],
        fontWeight: 400,
        textAlign: "center",
        textTransform: "uppercase"
      }}
    >
      BADM™
    </Typography>
  </ButtonBase>;

export default LogoSection;
