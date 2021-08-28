import axiosInstance from "../../utils/axios-instance";

import {
  ISignUpUserRequest,
  ILogInUserRequest,
  ILogInUserResponse,
} from "./types";

export const signUpUserRequest = (request: ISignUpUserRequest) => {
  return axiosInstance.post("/signup", request);
};

export const logInUserRequest = (request: ILogInUserRequest) => {
  return axiosInstance.post<ILogInUserResponse>("/login", request);
};
