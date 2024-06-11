import { IInsertCategory } from "../types/category.type";
import { IFilter } from "../types/filter.type";
import { IJobInfo } from "../types/job-info.type";
import { categoryAPI, jobAPI, jobInfoAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const getCategoriesService = (parentId?: string) => {
  return axiosConfig.get(categoryAPI, { params: { parentId } });
};

export const upsertCategoriesService = (
  id: string,
  title?: string,
  icon?: any
) => {
  return axiosConfig.put(`${categoryAPI}${id}`, { title, icon });
};

export const insertCategoriesService = (data: IInsertCategory) => {
  return axiosConfig.post(`${categoryAPI}`, data);
};
