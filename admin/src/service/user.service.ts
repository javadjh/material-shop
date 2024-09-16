import { IFilter } from "../types/filter.type";
import { ILoginUser } from "../types/user.type";
import { loginAPI, userAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const loginService = (user: ILoginUser) => {
  return axiosConfig.post(loginAPI, user);
};

export const usersService = (filter: IFilter) => {
  return axiosConfig.get(userAPI, { params: filter });
};
