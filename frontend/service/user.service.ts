import { ILoginUser } from "../types/user.type";
import { loginAPI, registerOneAPI, registerTwoAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const loginService = (user: ILoginUser) => {
  return axiosConfig.post(loginAPI, user);
};

export const registerOneService = (phone: string) => {
  return axiosConfig.post(registerOneAPI, { phone });
};

export const registerTwoService = (data: {
  phone: string;
  password: string;
  code: number;
}) => {
  return axiosConfig.post(registerTwoAPI, data);
};
