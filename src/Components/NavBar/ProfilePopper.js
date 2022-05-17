import { useSelector } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  ClickAwayListener,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { IconLogout } from "@tabler/icons";

import Transitions from "../ManagerView/ui-component/extended/Transitions";
import MainCard from "../ManagerView/ui-component/cards/MainCard";

const ProfilePopper = ({
  open,
  handleClose,
  handleLogout,
  user,
  reference
}) => {
  const customization = useSelector(state => state.customization);
  const theme = useTheme();

  return (
    <Popper
      placement="bottom-end"
      open={open}
      anchorEl={reference}
      role={undefined}
      transition
      disablePortal
      popperOptions={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 14]
            }
          }
        ]
      }}
    >
      {({ TransitionProps }) =>
        <Transitions in={open} {...TransitionProps}>
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MainCard
                border={false}
                elevation={16}
                content={false}
                boxShadow
                shadow={theme.shadows[16]}
              >
                <Box sx={{ p: 2 }}>
                  <Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <Typography variant="h4">
                        Hello {user.name}
                      </Typography>
                      <Typography
                        component="span"
                        variant="h4"
                        sx={{ fontWeight: 400 }}
                      >
                        {user.name}
                      </Typography>
                    </Stack>
                    <Typography variant="subtitle2">
                      {user.isAdmin ? "Store Admin" : "Customer"}
                    </Typography>
                  </Stack>
                  <Divider />
                </Box>
                <PerfectScrollbar
                  style={{
                    height: "100%",
                    maxHeight: "calc(100vh - 250px)",
                    overflowX: "hidden"
                  }}
                >
                  <Box sx={{ p: 2 }}>
                    <List
                      component="nav"
                      sx={{
                        width: "100%",
                        maxWidth: 350,
                        minWidth: 300,
                        backgroundColor: theme.palette.background.paper,
                        borderRadius: "10px",
                        [theme.breakpoints.down("md")]: {
                          minWidth: "100%"
                        },
                        "& .MuiListItemButton-root": {
                          mt: 0.5
                        }
                      }}
                    >
                      <ListItemButton
                        sx={{ borderRadius: `${customization.borderRadius}px` }}
                        onClick={handleLogout}
                      >
                        <ListItemIcon>
                          <IconLogout stroke={1.5} size="1.3rem" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">Logout</Typography>
                          }
                        />
                      </ListItemButton>
                    </List>
                  </Box>
                </PerfectScrollbar>
              </MainCard>
            </ClickAwayListener>
          </Paper>
        </Transitions>}
    </Popper>
  );
};

export default ProfilePopper;
