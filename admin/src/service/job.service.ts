import { IFilter } from "../types/filter.type";
import { IJobInfo } from "../types/job-info.type";
import { jobAPI, jobInfoAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const jobsService = (filter: IFilter) => {
  return axiosConfig.get(jobAPI, { params: filter });
};
