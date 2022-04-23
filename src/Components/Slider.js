import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { getIsMobile } from "../Constants/helpers";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    position: "relative",
    overflow: "hidden"
  },
  imgContainer: {
    height: "100%",
    flex: 1
  },
  img: {
    height: "80%",
    marginTop: theme.spacing(10),
    marginLeft: theme.spacing(5),
    borderRadius: theme.spacing(4)
  },
  infoContainer: {
    flex: 1,
    padding: "50px"
  },
  title: {
    fontSize: "70px"
  },
  description: {
    margin: "50px 0px",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: "3px"
  },
  btn: {
    padding: "10px",
    fontSize: "20px",
    backgroundColor: "transparent",
    cursor: "pointer",
    textTransform: "capitalize"
  }
}));

const left = "left";
const right = "right";

const StyledWrapper = styled(Box)(({ index }) => ({
  height: "100%",
  display: "flex",
  transition: "all 1.5s ease",
  transform: `translateX(${index * -100}vw)`
}));

const StyledSlide = styled(Box)(({ bg }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundColor: `#${bg}`
}));

const StyledArrow = styled(Box)(({ direction }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: "#fff7f7",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: direction === left && 10,
  right: direction === right && 10,
  margin: "auto",
  cursor: "pointer",
  opacity: 0.5,
  zIndex: 2
}));

const StyledContainer = styled(Box)(({ isMobile }) => ({
  width: "100%",
  height: "100vh",
  display: isMobile ? "none" : "flex",
  position: "relative",
  overflow: "hidden"
}));

const Slider = ({ sliderItems }) => {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleSliderClicked = direction => {
    if (direction === left) {
      setIndex(prevState => (prevState > 0 ? prevState - 1 : 2));
    } else {
      setIndex(prevState => (prevState < 2 ? prevState + 1 : 0));
    }
  };

  return (
    <StyledContainer component="div" isMobile={getIsMobile()}>
      <StyledArrow
        direction={left}
        component="div"
        onClick={() => handleSliderClicked(left)}
      >
        <ArrowLeft />
      </StyledArrow>
      <StyledWrapper component="div" index={index}>
        {sliderItems &&
          sliderItems.map(item =>
            <StyledSlide bg={item.bg} key={item.id} component="div">
              <Box component="div" className={classes.imgContainer}>
                <Box src={item.img} className={classes.img} component="img" />
              </Box>
              <Box component="div" className={classes.infoContainer}>
                <Typography className={classes.title} component="h1">
                  {item.title}
                </Typography>
                <Typography className={classes.description} component="p">
                  {item.description}
                </Typography>
                <Box component="button" className={classes.btn}>
                  Show Me More
                </Box>
              </Box>
            </StyledSlide>
          )}
      </StyledWrapper>
      <StyledArrow
        component="div"
        direction={right}
        onClick={() => handleSliderClicked(right)}
      >
        <ArrowRight />
      </StyledArrow>
    </StyledContainer>
  );
};

export default Slider;
