import { IEmployment } from "../types/employment.type";
import { employmentAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const insertEmployment = (employment: IEmployment) => {
  return axiosConfig.post(employmentAPI, employment);
};
