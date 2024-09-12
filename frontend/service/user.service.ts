import { getCookie } from "cookies-next";
import { ILoginUser } from "../types/user.type";
import { loginAPI, registerOneAPI, registerTwoAPI, userAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const loginService = (user: ILoginUser) => {
  return axiosConfig.post(loginAPI, user);
};

export const registerOneService = (phone: string) => {
  return axiosConfig.post(registerOneAPI, { phone });
};

export const registerTwoService = (data: { phone: string; code: number }) => {
  return axiosConfig.post(registerTwoAPI, data);
};

export const profileService = () => {
  return axiosConfig.get(`${userAPI}profile`);
};

export const updateUserService = (data: any) => {
  return axiosConfig.post(`${userAPI}update`, data, {
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};
