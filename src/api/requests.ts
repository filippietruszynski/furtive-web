import axiosInstance from "./axios";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ISignupRequest {
  email: string;
  password: string;
}

export const signup = (request: ISignupRequest) =>
  axiosInstance.post("/signup", request);

export const login = (request: ILoginRequest) =>
  axiosInstance.post("/login", request);
