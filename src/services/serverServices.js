import { loginURL, registerURL } from "../Constants/urls";
import { handleErrResponse, post } from "./axios";

export const loginUser = async (email, password) => {
  try {
    const res = await post(loginURL, { email, password });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};

export const registerUser = async (email, password) => {
  try {
    const res = await post(registerURL, { email, password });

    return { data: res.data, status: res.status };
  } catch (err) {
    return handleErrResponse(err);
  }
};
