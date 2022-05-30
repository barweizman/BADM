import { makeStyles, useTheme } from "@mui/styles";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import componentStyles from "./user-header-style";

const useStyles = makeStyles(componentStyles);

const UserHeader = ({user}) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <Box
        paddingTop="3rem"
        paddingBottom="8rem"
        alignItems="center"
        display="flex"
        className={classes.wrapperBox}
        minHeight="300px"
        position="relative"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          className={classes.overlayBox}
        />
        <Container
          display="flex"
          alignItems="center"
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <Grid container>
            <Grid item xs={12} md={10} lg={7}>
              <Typography
                variant="h1"
                classes={{ root: classes.typographyRootH1 }}
              >
                Hello,{" "} {user?.name}
              </Typography>
              <Box
                component="p"
                marginBottom="3rem"
                color="white"
                lineHeight="1.7"
                fontSize="1rem"
              >
                This is your profile page. You can review your Orders and Favorites
                <br />
                Change your profile information too
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default UserHeader;
