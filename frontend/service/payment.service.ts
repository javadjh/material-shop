import { IFilter } from "../types/filter.type";
import { paymentAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const insertPaymentService = (data: any) => {
  return axiosConfig.post(paymentAPI, data);
};

export const paymentsService = (filter: IFilter) => {
  return axiosConfig.get(`${paymentAPI}users`, { params: filter });
};
