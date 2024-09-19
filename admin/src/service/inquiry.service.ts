import { IFilter } from "../types/filter.type";
import { inquiryAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const inquiriesService = (paging: IFilter) => {
  return axiosConfig.get(inquiryAPI, { params: paging });
};
