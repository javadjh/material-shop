import { IFilter } from "../types/filter.type";
import { jobAPI, locationAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const getProvincesService = () => {
  return axiosConfig.get(`${locationAPI}provinces`);
};

export const getCitiesService = (provinceId?: number) => {
  return axiosConfig.get(`${locationAPI}cities/${provinceId}`);
};
