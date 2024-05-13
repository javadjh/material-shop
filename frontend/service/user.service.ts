import { ILoginUser } from "../types/user.type";
import { loginAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const loginService = (user: ILoginUser) => {
  return axiosConfig.post(loginAPI, user);
};
