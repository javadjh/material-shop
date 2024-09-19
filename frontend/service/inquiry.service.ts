import { inquiryAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const insertInquiryService = (data: any) => {
  return axiosConfig.post(inquiryAPI, data);
};
