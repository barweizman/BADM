/* eslint-disable no-restricted-syntax */
/* eslint-disable no-nested-ternary */
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/serverServices";

const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const ClientOrderCard = ({ order, handleCancelOrder }) => {
  const [productArr, setProductArr] = useState([]);
  console.log( new Date(order.createdAt).getTime() + 30 * 60 * 1000 >=
  new Date().getTime())
  return (
    <Card
    sx={{
      minWidth: 275,
      backgroundColor: "transparent",
    }}
    onClick={
      new Date(order.createdAt).getTime() + 30 * 60 * 1000 >=
      new Date().getTime()
        ? handleCancelOrder()
        : null
    }
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
      <Grid
              container
              justifyContent="center"
              sx={{
                maxWidth: "300px",
                overflowX: "scroll"
              }}
            >
              {productArr?.map(prod => (
                prod?.images[0] ? <img src={prod?.images[0]} height="90px" width="90px" alt={prod.title} /> : null
              ))}
            </Grid>
    </CardContent>
  </Card>
  )
}

export default ClientOrderCard;
