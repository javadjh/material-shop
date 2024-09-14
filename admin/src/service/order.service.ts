import { IFilter } from "../types/filter.type";
import { orderAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const ordersService = (params: IFilter) => {
  return axiosConfig.get(orderAPI, { params });
};
