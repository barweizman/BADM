/* eslint-disable no-confusing-arrow */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Grid, IconButton } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";

import AppAnimation from "../Components/Common/AppAnimation";
import FreeShippingBar from "../Components/Common/FreeShippingBar";
import MyNavbar from "../Components/NavBar/MyNavbar";
import Footer from "../Components/Common/Footer";

import EmptyCartAnimation from "../assets/animations/empty-cart.json";

import { changeProductQuantity, getUser, getUserCart, removeFromCart } from "../store/reducers/generalReducer";
import { mobile } from "../Constants/responsive";
import paths from "../Constants/paths";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`${mobile({ display: "none" })};`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const Info = styled.div`flex: 3;`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })};
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`width: 200px;`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })};
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`font-weight: 200;`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const state = useSelector(s => s);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = getUser(state);
  const cart = getUserCart(state);

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart({id: product._id }))
  }

  const handleContinueShopping = () => {
    navigate(paths.index);
  }

  const handleMoveToFavorite= () => {
    navigate(paths.favorites);
  }

  const handleCheckoutClicked = () => {
    navigate(paths.checkout);
  }

  const handleChangeQuantity = (product, action) => {
    if(action === "INC") {
      console.log("!")
      dispatch(changeProductQuantity({product, id:product._id, quantity: 1}));
    }else if(action === "DEC") {
      dispatch(changeProductQuantity({product, id:product._id, quantity: -1}));
    }
  }

  return (
    <Container>
      <FreeShippingBar />
      <MyNavbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={handleContinueShopping} >CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag({cart?.products.length})</TopText>
            <TopText onClick={handleMoveToFavorite} >Your Wishlist ({user?.favorites.length})</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleCheckoutClicked} disabled={cart?.products?.length === 0} >CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart?.products.length ? cart.products.map(item =>
              <Product key={item.product._id} >
                <ProductDetail>
                  <Image src={item.product?.images[0]} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {item.product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {item.product._id}
                    </ProductId>
                    <ProductColor color={item.product.color} />
                    <ProductSize>
                      <b>Size:</b> {item.product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <IconButton onClick={() => handleChangeQuantity(item.product, "INC")} >
                      <Add />
                    </IconButton>
                    <ProductAmount>
                      {item.quantity}
                    </ProductAmount>
                    <IconButton onClick={() => handleChangeQuantity(item.product, "DEC")} >
                      <Remove />
                    </IconButton>
                  </ProductAmountContainer>
                  <ProductPrice>
                  $ {item.product.price * item.quantity}
                  </ProductPrice>
                <Grid >
                <IconButton onClick={() => handleRemoveFromCart(item.product)} >
                <Delete />
                </IconButton>
                </Grid>
                </PriceDetail>
              </Product>
            ) : (
              <Grid container justifyContent="center">
                <AppAnimation title="Cart is empty" LottieCmp={EmptyCartAnimation} />
              </Grid>
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>
              $ {cart.total}
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 9.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -9.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
              $ {cart.total} 
              </SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="BADM"
              // image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            > */}
            <Button 
              onClick={handleCheckoutClicked}
              disabled={cart?.products?.length === 0} 
             >
               CHECKOUT NOW
              </Button>
            {/* </StripeCheckout> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
