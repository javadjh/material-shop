import { swapAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const insertSwapService = (data: any) => {
  return axiosConfig.post(swapAPI, data);
};
