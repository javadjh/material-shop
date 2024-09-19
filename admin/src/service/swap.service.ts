import { IFilter } from "../types/filter.type";
import { swapAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const swapsService = (paging: IFilter) => {
  return axiosConfig.get(swapAPI, { params: paging });
};
