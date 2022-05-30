import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import Footer from "../Components/Footer";
import FreeShipping from "../Components/FreeShippingBar";
import MyNavbar from "../Components/MyNavbar";

import NewsLetter from "../Components/NewsLetter";
import { getUserById, getUserFavoriteProducts, getUserOrders } from "../services/serverServices";
import WhatsappButton from "../Components/Common/WhatsappButton";
import ClientProfile from "../Components/UserProfile/ClientProfile";
import { getUser } from "../store/reducers/generalReducer";

const UserPage = () => {
  const state = useSelector(s => s);
  const user = getUser(state);
  const [currentUser, setCurrentUser] = useState();
  const [orders, setOrders] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      const getUserInformation = async () => {
        if(user){
          Promise.all([
            getUserById(user?._id),
            getUserOrders(user?._id),
            getUserFavoriteProducts(user?._id)
          ]).then(res => {
            setCurrentUser(res[0].data);
            setOrders(res[1].data);
            setFavoriteProducts(res[2].data);
            setIsLoading(false);
          });
        }
      };

      getUserInformation();
    },
    [user?._id]
  );

  return (
    <Grid>
      <FreeShipping />
      <MyNavbar />
      <ClientProfile 
          favorites={favoriteProducts}
          user={currentUser}
          orders={orders}
          isLoading={isLoading} 
      />
      <NewsLetter />
      <Footer />
      <WhatsappButton />
    </Grid>
  );
};

export default UserPage;
