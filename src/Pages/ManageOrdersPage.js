import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { getAllOrders } from "../services/serverServices";
import SubCard from "../Components/ManagerView/ui-component/cards/SubCard";
import MainCard from "../Components/ManagerView/ui-component/cards/MainCard";
import SecondaryAction from "../Components/ManagerView/ui-component/cards/CardSecondaryAction";
import OrderCard from "../Components/ManagerView/views/utilities/ManageOrders/OrderCard";
import EditOrderDialog from "../Components/ManagerView/views/utilities/ManageOrders/EditOrderDialog";

const ManageOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(undefined);
  const [refetchOrders, setRefetchOrders] = useState(0);

  useEffect(() => {
    const getOrders = async () => {
      setIsLoading(true);
      const res = await getAllOrders();
      setIsLoading(false);
      if (res.status === 200) {
        setOrders(res.data);
      } 
    };
    getOrders();
  }, [refetchOrders]);

  const handleOrderClicked = order => {
    setCurrentOrder(order);
    setIsEditDialogOpen(true);
  };

  return (
      <>
    <MainCard title="Manage Orders" secondary={<SecondaryAction />}>
      {isLoading &&
        <Grid container justifyContent="center">
          <CircularProgress />
        </Grid>}
      <SubCard title="All Orders">
        <Grid
          container
          mt={5}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {orders.map(order =>
            <Grid item xs={4} key={order._id}>
              <OrderCard
                order={order}
                handleOrderClicked={() => handleOrderClicked(order)}
              />
            </Grid>
          )}
        </Grid>
      </SubCard>
    </MainCard>
    <EditOrderDialog 
        open={isEditDialogOpen}
        handleClose={() => {
            setIsEditDialogOpen(false);
            setRefetchOrders(prevState => prevState + 1);
        }}
        order={currentOrder}
    />
    </>
  );
};

export default ManageOrders;
