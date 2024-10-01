import { IFilter } from "../types/filter.type";
import { provideMaterialAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const provideMaterialsService = (paging: IFilter) => {
  return axiosConfig.get(provideMaterialAPI, { params: paging });
};
