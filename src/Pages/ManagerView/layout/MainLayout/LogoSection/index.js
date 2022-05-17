import { Link } from "react-router-dom";
import { ButtonBase, Typography } from "@mui/material";

import config from "../../../config";
import Logo from "../../../ui-component/Logo";

const LogoSection = () =>
  <ButtonBase disableRipple component={Link} to={config.defaultPath}>
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
      BADM
    </Typography>
  </ButtonBase>;

export default LogoSection;
