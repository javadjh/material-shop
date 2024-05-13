import { IFilter } from "../types/filter.type";
import { ISeller } from "../types/seller.type";
import { sellerAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const sellersService = (params: any) => {
  return axiosConfig.get(sellerAPI, { params });
};

export const insertSellerService = (data: ISeller) => {
  return axiosConfig.post(sellerAPI, data);
};

export const updateSellerService = (data: ISeller, id?: string) => {
  return axiosConfig.put(`${sellerAPI}${id}`, data);
};
