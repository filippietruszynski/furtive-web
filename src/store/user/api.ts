import axiosInstance from "../../utils/axios-instance";

import {
  ISignUpUserRequest,
  ILogInUserRequest,
  ILogInUserResponse,
} from "./types";

export const signUpUserRequest = (
  request: ISignUpUserRequest
): ReturnType<typeof axiosInstance.post> => {
  return axiosInstance.post("/signup", request);
};

export const logInUserRequest = (
  request: ILogInUserRequest
): ReturnType<typeof axiosInstance.post> => {
  return axiosInstance.post<ILogInUserResponse>("/login", request);
};
