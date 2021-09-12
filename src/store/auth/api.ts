import axiosInstance from "../../utils/axios-instance";

import { ISignUpRequest, ILogInRequest, ILogInResponse } from "./types";

export const signUpRequest = (request: ISignUpRequest) => {
  return axiosInstance.post("/signup", request);
};

export const logInRequest = (request: ILogInRequest) => {
  return axiosInstance.post<ILogInResponse>("/login", request);
};
