import { ButtonBase, Tooltip } from "@mui/material";

import Avatar from "../extended/Avatar";

const CardSecondaryAction = ({ title, src }) =>
  <Tooltip title={title || "Tubi or not To Be"} placement="left">
    <ButtonBase disableRipple>
      <Avatar
        target="_blank"
        alt="MUI Logo"
        size="large"
        color="primary"
        outline
        src={src || "https://www.svgrepo.com/show/50414/pepper.svg"}
      />
    </ButtonBase>
  </Tooltip>;

export default CardSecondaryAction;
