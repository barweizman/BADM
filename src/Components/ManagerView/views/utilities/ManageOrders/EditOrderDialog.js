import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
  Typography
} from "@mui/material";
import { deleteOrder, updateOrder } from "../../../../../services/serverServices";

const orderStatusOptions = [
    {key: 0, value: "Pending"},
    {key: 1, value: "Shipped"},
    {key: 2, value: "Completed"},
    {key: 3, value: "Canceled"},
]

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const EditOrderDialog = ({ open, handleClose, order }) => {
    const [currentOrder, setCurrentOrder] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const handleEditOrder = async () => {
      setIsLoading(true);
      const res = await updateOrder(currentOrder?._id, currentOrder);
      setIsLoading(false);
      if(res.status === 200) {
          handleClose();
      }
  };

  const handleDeleteOrder = async () => {
    setIsLoading(true);
    const res = await deleteOrder(currentOrder?._id);
    setIsLoading(false);
    if(res.status === 200) {
        setDeleteDialogOpen();
        handleClose();
    }
  };

  useEffect(() => {
      if(order) {
          setCurrentOrder(order);
      }
  }, [order])

  const onOrderStatusChange = (newStatus) => {
      setCurrentOrder(prevState => ({
          ...prevState,
          status: newStatus
      }))
  }

  return (
      <>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Order</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Ordered at: {" "}
            {new Date(currentOrder?.createdAt).toLocaleDateString("en-US", dateOptions)}
          </Typography>
        </DialogContentText>
        <Grid item sx={{mt: 2}}>
            <Typography variant="h4" > 
                Product in order:  {" "}
                {currentOrder?.products?.length}
            </Typography>
        </Grid>
        <Grid item sx={{mt: 5}}> 
        <Typography variant="caption">
            Ordered by user id: {" "}
            {currentOrder?.userId}
        </Typography>
        </Grid>
        <Typography variant="body2">
            Total Price: {" "}
            {currentOrder?.price}$
        </Typography>
        <TextField 
        label="Order Status"
        name="status"
        sx={{mt: 5}}
        select
        value={currentOrder?.status}
        onChange={(e) => onOrderStatusChange(e.target.value)}
        >
            {orderStatusOptions.map(type =>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    key={type.key}
                    value={type.value}
                  >
                    {type.value}
                  </MenuItem>
                )}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button disabled={isLoading} onClick={() => setDeleteDialogOpen(true)} color="error">
              Delete
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={isLoading} onClick={handleClose}>Cancel</Button>
            <Button disabled={isLoading} onClick={handleEditOrder}>Edit</Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
    {/* Are you sure dialog */}
    <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
            <DialogTitle sx={{fontSize: 20}} >
              Are you sure you want to delete this order?
            </DialogTitle>
            <Typography variant="caption"textAlign="center" >
                Once deleted, the order cannot be recovered
            </Typography>
            <DialogActions>
              <Button 
                onClick={() => setDeleteDialogOpen(false)}
                disabled={isLoading}
              >
                No
                </Button>
              <Button 
                color="error"
               onClick={handleDeleteOrder}
               disabled={isLoading}
               >
                Yes
              </Button>
            </DialogActions>
        </Dialog>
    </>
  );
};

export default EditOrderDialog;
