import { JWT_SESSION_KEY } from "./naming";

export const rememberMeSession = jwt => {
  localStorage.setItem(JWT_SESSION_KEY, jwt);
};

export const getJwtKey = () => localStorage.getItem(JWT_SESSION_KEY);

export const endLoginSession = () => {
  localStorage.removeItem(JWT_SESSION_KEY);
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export const getIsMobile = () => {
  const { width } = getWindowDimensions();
  if (width < 600) {
    return true;
  }
  return false;
};
