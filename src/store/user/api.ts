import { AxiosRequestConfig } from "axios";

import axiosInstance from "../../utils/axios-instance";

import { IUpdateUserRequest } from "./types";

export const getUserRequest = (config: AxiosRequestConfig) => {
  return axiosInstance.get("/api/user", config);
};

export const updateUserRequest = (
  request: IUpdateUserRequest,
  config: AxiosRequestConfig
) => {
  return axiosInstance.put("/api/user", request, config);
};
