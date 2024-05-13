import { IJobInfo } from "../types/job-info.type";
import { jobInfoAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const jobInfosService = () => {
  return axiosConfig.get(jobInfoAPI);
};

export const insertJobInfoService = (data: IJobInfo) => {
  return axiosConfig.post(jobInfoAPI, data);
};

export const updateJobInfoService = (data: IJobInfo, department?: string) => {
  return axiosConfig.put(`${jobInfoAPI}${department}`, data);
};
