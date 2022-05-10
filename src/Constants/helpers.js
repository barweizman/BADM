import { CART_SESSION_KEY, IS_OVER_18_KEY, JWT_SESSION_KEY } from "./naming";

export const rememberMeSession = jwt => {
  localStorage.setItem(JWT_SESSION_KEY, jwt);
};
export const writeIsOver18 = () => {
  localStorage.setItem(IS_OVER_18_KEY, true);
};

export const getJwtKey = () => localStorage.getItem(JWT_SESSION_KEY);

export const getIsOver18 = () => localStorage.getItem(IS_OVER_18_KEY);

export const endLoginSession = () => {
  localStorage.removeItem(JWT_SESSION_KEY);
};

export const setCartSession = cart => {
  localStorage.setItem(CART_SESSION_KEY, JSON.stringify(cart));
}

export const getCartSession = () => {
  const sessionCart = localStorage.getItem(CART_SESSION_KEY);
  if(sessionCart) {
    return JSON.parse(sessionCart);
  }
  return {
    products: [],
    total: 0
  }
}

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
};

export const findCartProductIndex = (products, prodId) =>
  products.findIndex(item => item?.product?._id === prodId);

  export const calcCartTotal = (products) => {
    let totalCart = 0;
    products.map(item => {
      totalCart += item.product.price * item.quantity
      return 1;
    });

    return totalCart;
  }

export const getIsMobile = () => {
  const { width } = getWindowDimensions();
  if (width < 600) {
    return true;
  }
  return false;
};

export const toWhatsappLink = phone => `https://wa.me/${phone}`;
