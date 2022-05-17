import AppAnimation from "../AppAnimation";

import WineLoadingAnimation from "../../assets/animations/wine-loading.json";

const LoadingAnimation = ({ title }) =>
  <AppAnimation LottieCmp={WineLoadingAnimation} title={title} />;

export default LoadingAnimation;
