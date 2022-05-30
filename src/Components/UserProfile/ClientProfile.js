/* eslint-disable no-useless-concat */
/* eslint-disable global-require */
/* eslint-disable prefer-template */
import { useEffect, useState } from "react";
import {Box, Button, Card, CardContent, CardHeader, Grid, FormLabel, FormGroup, FilledInput, Divider, Container,Typography, FormControl } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import {  SportsBar } from "@mui/icons-material";

import ClientOrderCard from "./ClientOrderCard";
import UserHeader from "./UserHeader";

import {getUser, setUser} from "../../store/reducers/generalReducer";
import componentStyles from "./profileStyles";
import { updateOrder, userChangeInfo } from "../../services/serverServices";
import CancelOrderDialog from "./CancelOrderDialog";

const useStyles = makeStyles(componentStyles);

const ClientProfile = ({favorites, orders, refetch}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(s => s);
  const user = getUser(state);
  
  const [localLoading, setLocalLoading] = useState(false);
  const [name, setName] = useState(user?.name || "" );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [orderToCancel, setOrderToCancel] = useState();

  const handleCancelOrder = async (orderId, order) => {
    console.log(orderId)
    console.log(order)
    setLocalLoading(true);
    const res = await updateOrder(orderId, order);
    setLocalLoading(false);
    if(res.status === 200) {
      setDialogOpen(false);
      refetch();
    }
  }

  const handleApproveCancelDialog = () => {
    if(orderToCancel) {
      handleCancelOrder(orderToCancel._id, {...orderToCancel, status: "Canceled"});
    }
  }

  const handleChangeUsername = async () => {
    setLocalLoading(true);
    const res = await userChangeInfo(user._id, name);
    setLocalLoading(false);
    if(res.status === 200) {
      dispatch(setUser(res.data));
    }
  }

  const handleNameChange = (newName) => {
    setName(newName);
  }
  useEffect(() => {
    setName(user?.name);
  }, [user])

  return (
    <>
      <CancelOrderDialog 
        open={dialogOpen}
        handleClose={() => setDialogOpen(false)}
        handleApprove={handleApproveCancelDialog} 
        loading={localLoading}
       />
      <UserHeader user={user} />
      <Container
        sx={{
          mt: 10
        }}
        maxWidth={false}
        component={Box}
        classes={{ root: classes.containerRoot }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            xl={8}
            component={Box}
            sx={{borderRadius: 80}}
            classes={{ root: classes.gridItemRoot + " " + classes.order2 }}
          >
            <Card
              classes={{
                root: classes.cardRoot + " " + classes.cardRootSecondary,
              }}
            >
              <CardHeader
                classes={{ root: classes.cardHeaderRoot }}
              />
              <CardContent>
                <Box
                  component={Typography}
                  variant="h6"
                  color={"gray" + "!important"}
                  paddingTop=".25rem"
                  paddingBottom=".25rem"
                  fontSize=".75rem!important"
                  letterSpacing=".04em"
                  marginBottom="1.5rem!important"
                  classes={{ root: classes.typographyRootH6 }}
                >
                  User Information
                </Box>
                <div className={classes.plLg4}>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="email"
                            disabled
                            value={user?.email}
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12} lg={6}>
                      <FormGroup>
                        <FormLabel>First name</FormLabel>
                        <FormControl
                          variant="filled"
                          component={Box}
                          width="100%"
                          marginBottom="1rem!important"
                        >
                          <Box
                            paddingLeft="0.75rem"
                            paddingRight="0.75rem"
                            component={FilledInput}
                            autoComplete="off"
                            type="text"
                            value={name}
                            onChange={(e) => handleNameChange(e.target.value)}
                          />
                        </FormControl>
                      </FormGroup>
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} lg={6}>
                        <Button variant="contained" disabled={localLoading} onClick={handleChangeUsername} >
                          Change Name
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <Box
                  component={Divider}
                  marginBottom="1.5rem!important"
                  marginTop="1.5rem!important"
                />
                <Box
                  component={Typography}
                  variant="h6"
                  color={"#D0C9C0" + "!important"}
                  paddingTop=".25rem"
                  paddingBottom=".25rem"
                  fontSize=".75rem!important"
                  letterSpacing=".04em"
                  marginBottom="1.5rem!important"
                  classes={{ root: classes.typographyRootH6 }}
                >
                  Your Orders
                </Box>
                <div className={classes.plLg4}>
                  <Grid container>
                    {orders?.map(order => (
                      <Grid item xs={12}>
                        <ClientOrderCard order={order} handleCancelOrder={() => {
                          setDialogOpen(true);
                          setOrderToCancel(order);
                        }} />
                      </Grid>
                    ))}
                  </Grid>
                </div>
                <Box
                  component={Divider}
                  marginBottom="1.5rem!important"
                  marginTop="1.5rem!important"
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            xl={4}
            component={Box}
            marginBottom="3rem!important"
            classes={{ root: classes.order1 + " " + classes.marginBottomXl0 }}
            sx={{
              borderRadius: 20
            }}
          >
            <Card classes={{ root: classes.cardRoot }}>
              <Box
                component={CardHeader}
                border="0!important"
                textAlign="center"
                paddingBottom="0!important"
                paddingTop="8rem!important"
                classes={{ root: classes.cardHeaderRootProfile }}
              />
              <Box
                component={CardContent}
                classes={{ root: classes.ptMd4 }}
                paddingTop="0!important"
              >
                <Grid container>
                  <Grid item xs={12}>
                    <Box
                      padding="1rem 0"
                      justifyContent="center"
                      display="flex"
                      className={classes.mtMd5}
                    >
                      <Box
                        textAlign="center"
                        marginRight="1rem"
                        padding=".875rem"
                      >
                        <Box
                          component="span"
                          fontSize="1.1rem"
                          fontWeight="700"
                          display="block"
                          letterSpacing=".025em"
                          className={classes.typographyRootH6}
                        >
                          {orders?.map(o => o.price).length > 0 ? orders?.map(o => o.price).reduce((a,b)=> a+b) : 0}$
                        </Box>
                        <Box
                          component="span"
                          fontSize=".875rem"
                          color="#D0C9C0"
                        >
                          Total Spent
                        </Box>
                      </Box>
                      <Box
                        textAlign="center"
                        marginRight="1rem"
                        padding=".875rem"
                      >
                        <Box
                          component="span"
                          fontSize="1.1rem"
                          fontWeight="700"
                          display="block"
                          letterSpacing=".025em"
                          className={classes.typographyRootH6}
                        >
                          {orders?.length || 0}
                        </Box>
                        <Box
                          component="span"
                          fontSize=".875rem"
                          color="#D0C9C0"
                        >
                          Orders
                        </Box>
                      </Box>
                      <Box textAlign="center" padding=".875rem">
                        <Box
                          component="span"
                          fontSize="1.1rem"
                          fontWeight="700"
                          display="block"
                          letterSpacing=".025em"
                          className={classes.typographyRootH6}
                        >
                          {favorites?.length || 0} 
                        </Box>
                        <Box
                          component="span"
                          fontSize=".875rem"
                          color="#D0C9C0"
                        >
                          Favorite Count
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Box textAlign="center">
                  <Typography variant="h3">
                    {user?.name}
                  </Typography>
                  <Box
                    component={Divider}
                    marginTop="1.5rem!important"
                    marginBottom="1.5rem!important"
                  />
                    <Box
                    component={Typography}
                    variant="h5"
                    fontWeight="300!important"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      component={SportsBar}
                      width="1.25rem!important"
                      height="1.25rem!important"
                    />
                    {orders?.length > 5 ? "Pro" : "Starter"} Alchoolist
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ClientProfile;
