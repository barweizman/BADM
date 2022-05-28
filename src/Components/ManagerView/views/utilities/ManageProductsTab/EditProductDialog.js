import { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography
} from "@mui/material";
import AddProduct from "./AddProduct";
import { deleteProduct, updateProduct } from "../../../../../services/serverServices";

const EditProductDialog = ({ open, handleClose, product }) => {
  const [currentProduct, setCurrentProduct] = useState();
  const [areYouSureDialog, setAreYouSureDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEditProduct = async () => {
    setLoading(true);
    const res = await updateProduct(currentProduct._id, currentProduct);
    setLoading(false);
    if(res.status === 200) {
      handleClose();
    }
  };

  const handleDeleteProduct = async () => {
    setLoading(true);
    const res = await deleteProduct(currentProduct._id);
    setLoading(false);
    if(res.status === 200) {
      setAreYouSureDialog(false);
      handleClose();
    }
  };

  const onEditProduct = p => {
    setCurrentProduct(p);
  };

  useEffect(() => {
    if(product) {
      setCurrentProduct(product)
    }
  }, [product])

  return (
    <>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit your product</DialogTitle>
      <DialogContent>
        <AddProduct
          product={currentProduct}
          existingProduct
          setExistingProduct={onEditProduct}
        />
      </DialogContent>
      <DialogActions>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button disabled={loading} color="error" onClick={() => setAreYouSureDialog(true)}>
              Delete
            </Button>
          </Grid>
          <Grid item>
            <Button disabled={loading} onClick={handleClose}>Cancel</Button>
            <Button disabled={loading} onClick={handleEditProduct}>Edit</Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
    {/* Are you sure dialog */}
        <Dialog
          open={areYouSureDialog}
          onClose={() => setAreYouSureDialog(false)}
        >
            <DialogTitle sx={{fontSize: 20}}>
              Are you sure you want to delete this product?
            </DialogTitle>
            <Typography variant="caption"textAlign="center" >
                Once deleted, the product cannot be recovered
            </Typography>
            <DialogActions>
              <Button 
                onClick={() => setAreYouSureDialog(false)}
                disabled={loading}
              >
                No
                </Button>
              <Button 
                color="error"
               onClick={handleDeleteProduct}
               disabled={loading}
               >
                Yes
              </Button>
            </DialogActions>
        </Dialog>
    </>
  );
};

export default EditProductDialog;
