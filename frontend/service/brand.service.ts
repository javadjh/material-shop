import { IBrand } from "../types/brand.type";
import { brandsAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const brandsService = () => {
  return axiosConfig.get(brandsAPI);
};

export const insertBrandService = (data: IBrand) => {
  return axiosConfig.post(brandsAPI, data);
};

export const updateBrandService = (id: string, data: IBrand) => {
  return axiosConfig.put(`${brandsAPI}${id}`, data);
};
