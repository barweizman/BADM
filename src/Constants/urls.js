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
const orderAdd = "addOrder";
const orderUpdate = "updateOrder";
const orderDelete = "deleteOrder";
const orderFind = "findOrder/:id";
const orderGetAll = "getOrders";
const orderGetIncome = "getIncomeOrder";
const orderGetStoreIncome = "getStoreIncomeOrder";

const productEndPoint = `/${api}/products`;
const productAdd = "addProduct";
const productUpdate = "updateProduct";
const productDelete = "deleteProduct";
const productFind = "findProduct";
const productGet = "getProducts";
const productGetFeatured = "getFeaturedProducts";
const productSearch = "searchProducts";

const userEndPoint = `/${api}/users`;
const userChangeInfo = "changeInfo";
const userFavorites = "favorites";
const userDelete = "deleteUser";
const userFind = "findUser";
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
export const getSearchedProductURL = `${productEndPoint}/${productSearch}`;

export const changeUserInfoURL = `${userEndPoint}/${userChangeInfo}`;
export const userFavoritesURL = `${userEndPoint}/${userFavorites}`;
export const deleteUserURL = `${userEndPoint}/${userDelete}`;
export const findUserURL = `${userEndPoint}/${userFind}`;
export const getAllUsersURL = `${userEndPoint}/${userGetAll}`;

export const addOrderURL = `${orderEndPoint}/${orderAdd}`;
export const deleteOrderURL = `${orderEndPoint}/${orderDelete}`;
export const findOrderURL = `${orderEndPoint}/${orderFind}`;
export const getAllOrdersURL = `${orderEndPoint}/${orderGetAll}`;
export const getOrdersIncomeByMonthURL = `${orderEndPoint}/${orderGetIncome}`;
export const updateOrderURL = `${orderEndPoint}/${orderUpdate}`;
export const getStoreIncomeURL = `${orderEndPoint}/${orderGetStoreIncome}`;

export const joinNewsletterURL = `${newsletterEndPoint}/${newsletterJoin}`;
