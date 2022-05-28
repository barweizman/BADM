import { useState, useRef, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "@mui/material/styles";
import {
    Avatar,
    Box,
    Chip,
    CircularProgress,
    ClickAwayListener,
    Divider,
    Drawer,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Popper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { Send } from "@mui/icons-material";

import PerfectScrollbar from "react-perfect-scrollbar";
import { IconLogout, IconSettings, IconUser} from "@tabler/icons";

import { userChangeInfo } from "../../../../../../services/serverServices";

import MainCard from "../../../../ui-component/cards/MainCard";
import Transitions from "../../../../ui-component/extended/Transitions";
import { getUser, logoutUser, setIsCurrentUserAdmin, setUser } from "../../../../../../store/reducers/generalReducer";
import paths from "../../../../../../Constants/paths";
import { endLoginSession } from "../../../../../../Constants/helpers";
import SubCard from "../../../../ui-component/cards/SubCard";
import { gridSpacing } from "../../../../../../store/constant";


const ProfileSection = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);
    const state = useSelector(s => s);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = getUser(state);
    const [selectedIndex,] = useState(-1);
    const [open, setOpen] = useState(false);
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState(user ? user.name : "");

    /**
     * anchorRef is used on different componets and specifying one type leads to other components throwing an error
     * */
    const anchorRef = useRef(null);

    const handleLogout = async () => {
        endLoginSession();
        dispatch(logoutUser());
        dispatch(setIsCurrentUserAdmin(false));
        navigate(paths.index);
    };

    const handleEditProfile = async () => {
        setOpen(false);
        setSideBarOpen(true);
    }

    const handleChangeUserName =async () => {
        setLoading(true);
        const res = await userChangeInfo(user._id, userName);
        setLoading(false);
        if(res.status === 200) {
            dispatch(setUser(res.data))
        }

    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);
    
    return (
        <>
            <Chip
                sx={{
                    height: "48px",
                    alignItems: "center",
                    borderRadius: "27px",
                    transition: "all .2s ease-in-out",
                    borderColor: theme.palette.primary.light,
                    backgroundColor: theme.palette.primary.light,
                    "&[aria-controls=\"menu-list-grow\"], &:hover": {
                        borderColor: theme.palette.primary.main,
                        background: `${theme.palette.primary.main}!important`,
                        color: theme.palette.primary.light,
                        "& svg": {
                            stroke: theme.palette.primary.light
                        }
                    },
                    "& .MuiChip-label": {
                        lineHeight: 0
                    }
                }}
                icon={
                    <Avatar
                        sx={{
                            ...theme.typography.mediumAvatar,
                            margin: "8px 0 8px 8px !important",
                            cursor: "pointer",
                            backgroundColor: theme.palette.secondary.main
                        }}
                        ref={anchorRef}
                        aria-controls={open ? "menu-list-grow" : undefined}
                        aria-haspopup="true"
                        color="inherit"
                    />
                }
                label={<IconSettings stroke={1.5} size="1.5rem" color={theme.palette.primary.main} />}
                variant="outlined"
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="primary"
            />
            <Popper
                placement="bottom-end"
                open={open}
                anchorEl={anchorRef.current}
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
                {({ TransitionProps }) => (
                    <Transitions in={open} {...TransitionProps}>
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MainCard border={false} elevation={16} content={false} boxShadow shadow={theme.shadows[16]}>
                                    <Box sx={{ p: 2 }}>
                                        <Stack>
                                            <Stack direction="row" spacing={0.5} alignItems="center">
                                                <Typography variant="h4">Hello,</Typography>
                                                <Typography component="span" variant="h4" sx={{ fontWeight: 400 }}>
                                                    {user?.name}
                                                </Typography>
                                            </Stack>
                                            <Typography variant="subtitle2">Store Admin</Typography>
                                        </Stack>
                                        <Divider />
                                    </Box>
                                    <PerfectScrollbar style={{ height: "100%", maxHeight: "calc(100vh - 250px)", overflowX: "hidden" }}>
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
                                                    selected={selectedIndex === 4}
                                                    onClick={handleLogout}
                                                >
                                                    <ListItemIcon>
                                                        <IconLogout stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={<Typography variant="body2">Logout</Typography>} />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{ borderRadius: `${customization.borderRadius}px` }}
                                                    selected={selectedIndex === 5}
                                                    onClick={handleEditProfile}
                                                >
                                                    <ListItemIcon>
                                                        <IconUser stroke={1.5} size="1.3rem" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={<Typography variant="body2">Edit Profile</Typography>} />
                                                </ListItemButton>
                                            </List>
                                        </Box>
                                    </PerfectScrollbar>
                                </MainCard>
                            </ClickAwayListener>
                        </Paper>
                    </Transitions>
                )}
            </Popper>
            <Drawer
                anchor="right"
                onClose={() => setSideBarOpen(false)}
                open={sideBarOpen}
                PaperProps={{
                    sx: {
                        width: 280
                    }
                }}
            >
                <PerfectScrollbar component="div">
                    <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                        <Grid item xs={12}>
                            {/* font family */}
                            <SubCard title="Edit Your Profile">
                                    <Typography variant="caption" >
                                        Hello {user?.name}
                                    </Typography>
                                    <Typography variant="body2" >
                                    Your Email: {user?.email}
                                    </Typography>
                                </SubCard>
                                <Typography variant="caption" sx={{mt: theme.spacing(4)}} >
                                    *Password is secure
                                </Typography>
                        </Grid>
                        <Grid item xs={12}>
                                {loading && <CircularProgress />}
                            <Grid container alignItems="center"  >
                                <TextField 
                                    label="Name"
                                    defaultValue={userName}
                                    onChange={(e)=> setUserName(e.target.value)}
                                    disabled={loading}
                                />
                                <IconButton onClick={handleChangeUserName} disabled={loading} >
                                    <Send />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </PerfectScrollbar>
            </Drawer>
        </>
    );
};

export default ProfileSection;
