import { IFilter } from "../types/filter.type";
import { IProduct } from "../types/product.type";
import { productAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const productsService = (params: IFilter) => {
  return axiosConfig.get(productAPI, { params });
};

export const insertProductService = (data: IProduct) => {
  return axiosConfig.post(productAPI, data);
};

export const updateProductService = (data: IProduct, id?: string) => {
  return axiosConfig.put(`${productAPI}${id}`, data);
};
