import { Box, Card, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { getAllOrders } from "../services/serverServices";
import SubCard from "../Components/ManagerView/ui-component/cards/SubCard";
import MainCard from "../Components/ManagerView/ui-component/cards/MainCard";
import SecondaryAction from "../Components/ManagerView/ui-component/cards/CardSecondaryAction";
import OrderCard from "../Components/ManagerView/views/utilities/ManageOrders/OrderCard";


const ColorBox = ({ bgcolor, title, data, dark }) => (
    <>
        <Card sx={{ mb: 3 }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    py: 4.5,
                    bgcolor,
                    color: dark ? "grey.800" : "#ffffff"
                }}
            >
                {title && (
                    <Typography variant="subtitle1" color="inherit">
                        {title}
                    </Typography>
                )}
                {!title && <Box sx={{ p: 1.15 }} />}
            </Box>
        </Card>
        {data && (
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="subtitle2">{data.label}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" sx={{ textTransform: "uppercase" }}>
                        {data.color}
                    </Typography>
                </Grid>
            </Grid>
        )}
    </>
);


const ManageOrders = () => {
    const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            setIsLoading(true);
            const res = await getAllOrders();
            setIsLoading(false);
            if(res.status === 200 ) {
                setOrders(res.data);
            }else {
                // err in orders
            }
        }
        getOrders();
    }, [])
    const handleOrderClicked = (orderId) => {
        console.log(orderId)
    }
    
    return (
        <MainCard title="Manage Orders" secondary={<SecondaryAction />}>
            {isLoading &&
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>}
            <SubCard title="All Orders" >
            <Grid
          container
          mt={5}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {orders.map(order =>
            <Grid item xs={4} key={order._id}>
              <OrderCard order={order} handleOrderClicked={() => handleOrderClicked(order._id)} />
            </Grid>
          )}
        </Grid>
            </SubCard>
        </MainCard>
    )
}

export default ManageOrders;
