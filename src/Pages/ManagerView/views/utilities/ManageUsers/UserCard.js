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

const UserCard = ({ user }) =>  (
    <Card sx={{ minWidth: 275, backgroundColor: user.isAdmin ? "#FDEFF4" :"#F7F5F2" }}>
      <CardContent sx={{textAlign: "center"}} >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Registered at:{" "}
          {new Date(user.createdAt).toLocaleDateString("en-US", dateOptions)}
        </Typography>
        <Grid container justifyContent="center" >
        {user.isAdmin ?<Badge badgeContent="Admin" sx={{mt: 1}} color="secondary">
            <Avatar sx={{ backgroundColor: "#A2D5AB" }}>
            {user?.email[0].toUpperCase()}
            </Avatar>
        </Badge> :
            <Avatar sx={{ backgroundColor: "#A2D5AB" }}>
            {user?.email[0].toUpperCase()}
            </Avatar>
        }
        </Grid>
        <Typography variant="h4" component="div" textTransform="capitalize">
          {user.name || "No name"}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 15 }}>
          Email: {user.email}
        </Typography>
        <Typography variant="body2">
          Id{user._id}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );

export default UserCard;
