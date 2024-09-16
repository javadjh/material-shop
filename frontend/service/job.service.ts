import { headers } from "next/headers";
import { IFilter } from "../types/filter.type";
import { IJobInfo } from "../types/job-info.type";
import { jobAPI, jobInfoAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";
import { getCookie } from "cookies-next";

export const jobsService = (filter: IFilter) => {
  return axiosConfig.get(jobAPI, { params: filter });
};

export const insertService = (data: any) => {
  return axiosConfig.post(jobAPI, data, {
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};
