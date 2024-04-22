import { IBrand } from "../types/brand.type";
import { IFilter } from "../types/filter.type";
import { brandsAPI, reportAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const reportsService = (paging: IFilter) => {
  return axiosConfig.get(reportAPI, { params: paging });
};
