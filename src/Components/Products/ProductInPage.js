import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Button, Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Add, Remove } from "@mui/icons-material";

import AppAlert from "../AppAlert";

import { DEC, INC } from "../../Constants/naming";
import { addToUserCart } from "../../store/reducers/appState";

// const FilterSizeOption = styled.option``;

const useStyles = makeStyles(() => ({
  root: {
    padding: "50px",
    display: "flex"
    //   ${mobile({ padding: "10px", flexDirection: "column" })}
  },
  addContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
    //   ${mobile({ width: "100%" })}
  },
  amount: {
    width: "30px",
    height: "30px",
    borderRadius: "10px",
    border: "1px solid teal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0px 5px"
  },
  amountContainer: {
    display: "flex",
    alignItems: "center",
    fontWeight: "700"
  },
  btn: {
    padding: "15px",
    border: "2px solid teal",
    backgroundColor: "white",
    cursor: "pointer",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "#f8f4f4"
    }
  },
  description: {
    margin: "20px 0px"
  },
  filter: {
    display: "flex",
    alignItems: "center"
  },
  filterContainer: {
    width: "50%",
    margin: "30px 0px",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center"
    //   ${mobile({ width: "100%" })}
  },
  filterSize: {
    marginLeft: "10px",
    padding: "5px"
  },
  filterTitle: {
    fontSize: "20px",
    fontWeight: "200"
  },
  img: {
    width: "90%",
    height: "70vh",
    objectFit: "cover"
    //   ${mobile({ height: "40vh" })},
  },
  imgContainer: {
    flex: 1
  },
  imgPreview: {
    width: "40%",
    height: "20vh",
    objectFit: "cover"
  },

  infoContainer: {
    flex: "1",
    padding: "0px 50px"
    //   ${mobile({ padding: "10px" })}
  },
  price: {
    fontWeight: "100",
    fontSize: "40px"
  },
  title: {
    fontWeight: 200
    // h1
  }
}));

// const StyledFilterColor = styled(Grid)(({ color }) => ({
//   width: "20px",
//   height: "20px",
//   borderRadius: "50%",
//   backgroundColor: color,
//   margin: "0px 5px",
//   cursor: "pointer"
// }));

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [imgIndex,setImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [addToCartAlert, setAddToCartAlert ] = useState(false);

  const handleImgIndex = (index) => {
      if(index > product?.images.length || index < 0) return;

      setImgIndex(index);
  }

  const handleQuantityClicked = (action) => {
      if(action === INC) {
          setQuantity(prevState => prevState + 1);
      }else if(action === DEC && quantity > 0) {
            setQuantity(prevState => prevState - 1);
      }
  }

  const handleAddToCart = () => {
    dispatch(addToUserCart({product, quantity: 1}));
    setAddToCartAlert(true);
  }

  return (
    <>
    <AppAlert
       hide={2000}
      msg="Added to cart"
      open={addToCartAlert} 
      handleClose={() => setAddToCartAlert(false)} 
      />
    <Grid className={classes.root}>
        <Grid  >
      <Grid className={classes.imgContainer}>
        <img
          alt={product.title}
          className={classes.img}
          src={product.images[imgIndex]}
        />
      </Grid>
      <Grid className={classes.imgContainer} >
          {product?.images.map((img,index) => (
              <Button onClick={() => handleImgIndex(index)} >
                  <img alt={product.title} className={classes.imgPreview} src={img} />
              </Button>
          ))}
      </Grid>
      </Grid>
      <Grid className={classes.infoContainer}>
        <Typography className={classes.title} variant="h1">
          {product.title}
        </Typography>
        <Typography className={classes.description} variant="p">
          {product.description}
        </Typography>
        <Typography className={classes.price} variant="subtitle1">
        ₪{product.price}
        </Typography>
        <Grid className={classes.filterContainer}>
            <Typography variant="subtitle1" className={classes.filterTitle}>
            Quantity
            </Typography>
            <Grid container alignItems="center" >
            <IconButton onClick={() => handleQuantityClicked(INC)} >
                <Add fontSize="small" /> 
            </IconButton>
            <Typography className={classes.amount} variant="subtitle1">
            {quantity}
          </Typography>
            <IconButton onClick={() => handleQuantityClicked(DEC)} >
                <Remove fontSize="small" />
            </IconButton>
            </Grid>
        </Grid>
        <Grid className={classes.filterContainer}>
            <select className={classes.filterSize}>
                {product.size?.map(item => (
                    <option>{item}</option>
                ))}
            </select>

        </Grid>
        <Grid className={classes.addContainer}>
          <Button className={classes.btn} onClick={handleAddToCart} >Add To Cart</Button>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default Product;
