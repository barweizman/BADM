import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";

const CancelOrderDialog = ({ open, handleClose, handleApprove, loading }) =>
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      Are you sure you want to cancel this order?
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        Cancel order cannot be revert
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} disabled={loading}>
        Disagree
      </Button>
      <Button onClick={handleApprove} autoFocus disabled={loading}>
        Agree
      </Button>
    </DialogActions>
  </Dialog>;

export default CancelOrderDialog;
