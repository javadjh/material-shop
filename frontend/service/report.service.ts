import { IReport } from "../types/report.type";
import { reportAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const insertReport = (report: IReport) => {
  return axiosConfig.post(reportAPI, report);
};
