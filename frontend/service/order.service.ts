import { IFilter } from "../types/filter.type";
import { orderAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const insertOrderService = () => {
  return axiosConfig.post(orderAPI);
};

export const ordersService = (filter: IFilter) => {
  return axiosConfig.get(`${orderAPI}users`, { params: filter });
};
