/* eslint-disable no-nested-ternary */
import { Card, CardActions, CardContent, Typography } from "@mui/material";

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
      backgroundColor:
        order.status.toLowerCase() === "completed"
          ? "#B8F1B0"
          : order.status.toLowerCase() === "pending" ? "#9FB4FF" : "#FFF56D",
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
      <Typography
        sx={{ mt: 1.5, fontSize: 17 }}
        textTransform="capitalize"
        fontWeight="800"
      >
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
