import axios from "axios";
import { getJwtKey } from "../Constants/helpers";

console.log("process.env.REACT_APP_ENV = ", process.env.REACT_APP_ENV);

if (process.env.REACT_APP_ENV === "LOCAL") {
  axios.defaults.baseURL = "http://localhost:5001";
} else {
  axios.defaults.baseURL = "http://localhost:5001";
}

export const handleErrResponse = error => {
  if (error.response) {
    const resp = {
      code: error.response.status,
      msg: error.response.data
    };
    return resp;
  }
  if (error.request) {
    const resp = { code: -1, msg: "No Response Recived" };
    return resp;
  }
  const resp = { code: -1, msg: error.message };
  return resp;
};

export const get = (url, headers) =>
  axios.get(url, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });

export const post = (url, data, headers) =>
  axios.post(url, data, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });

export const put = (url, data, headers) =>
  axios.put(url, data, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });

export const del = (url, headers) =>
  axios.delete(url, {
    headers: {
      ...headers,
      token: `Bearer ${getJwtKey()}`
    },
    withCredentials: false
  });
