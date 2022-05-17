import {
  Avatar,
  Badge,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography
} from "@mui/material";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const OrderCard = ({ order, handleOrderClicked }) =>
  <Card
    sx={{
      minWidth: 275,
      backgroundColor: "#F7F5F2",
      cursor: "pointer"
    }}
    onClick={handleOrderClicked}
  >
    <CardContent sx={{ textAlign: "center" }}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {new Date(order.createdAt).toLocaleDateString("en-US", dateOptions)}
      </Typography>
      <Typography variant="h4" component="div" textTransform="capitalize">
        Price: {order.price}$
      </Typography>
      <Typography sx={{ mt: 1.5, fontSize: 15 }} textTransform="capitalize">
        Status: {order.status}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        ID: {order._id}
      </Typography>
    </CardContent>
    <CardActions>
      {/* <Button size="small">Learn More</Button> */}
    </CardActions>
  </Card>;

export default OrderCard;
