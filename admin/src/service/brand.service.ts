import { IFilter } from "../types/filter.type";
import { brandsAPI, loginAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const brandsService = () => {
  return axiosConfig.get(brandsAPI);
};
