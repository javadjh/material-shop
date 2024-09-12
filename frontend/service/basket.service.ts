import { basketAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const getBaskets = () => {
  return axiosConfig.get(basketAPI);
};

export const deleteBasket = (data: any) => {
  return axiosConfig.delete(basketAPI, { params: data });
};

export const insertBasket = (data: any) => {
  return axiosConfig.post(basketAPI, data);
};
