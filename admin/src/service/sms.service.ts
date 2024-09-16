import { smsAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const sendSmsService = (data: any) => {
  return axiosConfig.post(smsAPI, data);
};
