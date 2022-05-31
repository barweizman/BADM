/* eslint-disable no-confusing-arrow */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import { Card, CardContent, Typography } from "@mui/material";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const ClientOrderCard = ({ order, handleCancelOrder }) => {
  const canBeCanceled =
    new Date(order.createdAt).getTime() + 30 * 60 * 1000 >=
      new Date().getTime() && order.status !== "Canceled";

  return (
    <Card
      sx={{
        minWidth: 275,
        backgroundColor: "transparent",
        cursor: canBeCanceled ? "pointer" : "default",
        "&:hover": {
          backgroundColor: canBeCanceled ? "#FAF0D7" : undefined
        }
      }}
      onClick={canBeCanceled && (() => handleCancelOrder())}
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
      </CardContent>
    </Card>
  );
};

export default ClientOrderCard;
