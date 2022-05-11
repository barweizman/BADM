import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";

import Lottie from "lottie-web";
import App404 from "../assets/animations/404.json";
import theme from "../Constants/theme";

const AppAnimation = ({ animationSize, loop, LottieCmp, title, subTitle }) => {
  useEffect(
    () => {
      Lottie.loadAnimation({
        autoplay: true,
        container: document.getElementById("lottie-div"),
        loop: loop !== undefined ? loop : true,
        animationData: LottieCmp || App404,
        renderer: "svg"
      });
    },
    [LottieCmp]
  );

  return (
    <Grid container justifyContent="center" direction="column">
      <Grid
        sx={{
          maxHeight: animationSize || theme.spacing(40),
          maxWidth: animationSize ? animationSize * 1.2 : theme.spacing(45),
          alignSelf: "center",
          mb: theme.spacing(2)
        }}
      >
        <div id="lottie-div" />
      </Grid>
      {title &&
        <Typography mt={2} component="h3" variant="h5" textAlign="center">
          {title}
        </Typography>}
      {subTitle &&
        <Typography
          mt={2}
          variant="subtitle1"
          textAlign="center"
          component="h5"
        >
          {subTitle}
        </Typography>}
    </Grid>
  );
};

export default AppAnimation;
