import {
  addOrderURL,
  addProductURL,
  changeUserInfoURL,
  deleteOrderURL,
  deleteProductURL,
  findOrderURL,
  findUserURL,
  getAllOrdersURL,
  getAllProductsURL,
  getAllUsersURL,
  getFeaturedProductsURL,
  getOrdersIncomeByMonthURL,
  getProductByIdURL,
  getSearchedProductURL,
  getStoreIncomeURL,
  getUserURL,
  joinNewsletterURL,
  loginURL,
  registerURL,
  updateOrderURL,
  updateProductURL,
  userFavoritesURL
} from "../Constants/urls";
import { handleErrResponse, post, get, put, del } from "./axios";

export const loginUser = async (email, password) => {
  try {
    const res = await post(loginURL, { email, password });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const registerUser = async (email, password, name) => {
  try {
    const res = await post(registerURL, { email, password, name });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getUser = async () => {
  try {
    const res = await get(getUserURL);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getUserById = async id => {
  try {
    const res = await get(`${findUserURL}/${id}`);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getProductById = async id => {
  try {
    const res = await get(`${getProductByIdURL}/${id}`);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getFeaturedProducts = async () => {
  try {
    const res = await get(getFeaturedProductsURL);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getAllProducts = async (category, page, latest, getAll) => {
  try {
    const res = await get(
      `${getAllProductsURL}?category=${category}&getAll=${getAll}&page=${page}&latest=${latest}`
    );
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getUserFavoriteProducts = async userId => {
  try {
    const res = await get(`${userFavoritesURL}/${userId}`);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const addToUserFavoriteProducts = async (userId, productId) => {
  try {
    const res = await put(
      `${userFavoritesURL}/${userId}?productId=${productId}`
    );
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const deleteProductFromUserFavorites = async (userId, productId) => {
  try {
    const res = await del(
      `${userFavoritesURL}/${userId}?productId=${productId}`
    );
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getSearchedProduct = async val => {
  try {
    const res = await get(`${getSearchedProductURL}?searchVal=${val}`);
    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const joinNewsletter = async email => {
  try {
    const res = await post(joinNewsletterURL, { email });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const userChangeInfo = async (id, name) => {
  try {
    const res = await put(`${changeUserInfoURL}/${id}`, { name });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getUserOrders = async id => {
  try {
    const res = await get(`${findOrderURL}/${id}`);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const createUserOrder = async order => {
  try {
    const res = await post(addOrderURL, order);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

// =========== ADMIN FUNCTIONS :

export const adminAddProduct = async ({
  title,
  description,
  price,
  category,
  quantity,
  type,
  images,
  isFeatured
}) => {
  try {
    const res = await post(addProductURL, {
      title,
      description,
      price,
      category,
      quantity,
      type,
      images,
      isFeatured
    });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getAllUsers = async () => {
  try {
    const res = await get(getAllUsersURL);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getStoreIncome = async () => {
  try {
    const res = await get(getStoreIncomeURL);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getStoreIncomeByMonth = async month => {
  try {
    const res = await get(`${getOrdersIncomeByMonthURL}/${month}`);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const getAllOrders = async topOrders => {
  try {
    const res = await get(`${getAllOrdersURL}?top=${topOrders}`);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const deleteProduct = async id => {
  try {
    const res = await del(`${deleteProductURL}/${id}`);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const updateProduct = async (id, product) => {
  try {
    const res = await put(`${updateProductURL}/${id}`, product);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const updateOrder = async (id, order) => {
  try {
    const res = await put(`${updateOrderURL}/${id}`, order);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const deleteOrder = async id => {
  try {
    const res = await del(`${deleteOrderURL}/${id}`);

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
