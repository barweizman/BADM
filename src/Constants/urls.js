const api = "api";

const authEndPoint = `/${api}/auth`;
const authRegister = "register";
const authLogin = "login";
const authGetUser = "getUser";

export const cartEndPoint = `/${api}/carts`;
export const cartAdd = "addCart";
export const cartGetById = "getCartById";
export const cartDelete = "deleteCart/:id";
export const cartFind = "findCart/:id";
export const cartGetAll = "getCarts";
export const cartUpdate = "updateCart/:id";

export const orderEndPoint = `/${api}/orders`;

const productEndPoint = `/${api}/products`;
const productAdd = "addProduct";
const productUpdate = "updateProduct/:id";
const productDelete = "deleteProduct/:id";
const productFind = "findProduct";
const productGet = "getProducts";
const productGetFeatured = "getFeaturedProducts";

const userEndPoint = `/${api}/users`;
const userChangeInfo = "changeInfo/:id";
const userFavorites = "favorites/:id";
const userDelete = "deleteUser/:id";
const userFind = "findUser/:id";
const userGetAll = "getUsers";

const newsletterEndPoint = `/${api}/newsletter`;
const newsletterJoin = "join";

export const loginURL = `${authEndPoint}/${authLogin}`;
export const registerURL = `${authEndPoint}/${authRegister}`;
export const getUserURL = `${authEndPoint}/${authGetUser}`;

export const addProductURL = `${productEndPoint}/${productAdd}`;
export const updateProductURL = `${productEndPoint}/${productUpdate}`;
export const deleteProductURL = `${productEndPoint}/${productDelete}`;
export const getProductByIdURL = `${productEndPoint}/${productFind}`;
export const getAllProductsURL = `${productEndPoint}/${productGet}`;
export const getFeaturedProductsURL = `${productEndPoint}/${productGetFeatured}`;

export const changeUserInfoURL = `${userEndPoint}/${userChangeInfo}`;
export const addToFavoritesUserURL = `${userEndPoint}/${userFavorites}`;
export const deleteUserURL = `${userEndPoint}/${userDelete}`;
export const findUserURL = `${userEndPoint}/${userFind}`;
export const getAllUsersURL = `${userEndPoint}/${userGetAll}`;

export const joinNewsletterURL = `${newsletterEndPoint}/${newsletterJoin}`;
