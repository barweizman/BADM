import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { styled } from "@mui/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserCart } from "../../store/reducers/generalReducer";

import theme from "../../Constants/theme";
import paths from "../../Constants/paths";

const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px"
  }
}));

const CartIconNavBar = () => {
  const state = useSelector(s => s);
  const navigate = useNavigate();
  const cartItems = getUserCart(state);

  const handleCartClicked = () => {
    navigate(paths.cart);
  };

  return (
    <IconButton onClick={handleCartClicked}>
      <StyledBadge badgeContent={cartItems?.products?.length} color="primary">
        <ShoppingCart sx={{ color: "white" }} fontSize="large" />
      </StyledBadge>
    </IconButton>
  );
};

export default CartIconNavBar;
