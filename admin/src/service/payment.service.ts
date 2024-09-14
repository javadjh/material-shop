import { IFilter } from "../types/filter.type";
import { paymentAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const paymentsService = (params: IFilter) => {
  return axiosConfig.get(paymentAPI, { params });
};
