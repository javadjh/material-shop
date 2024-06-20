import { appSettingAPI, locationAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const updateAppSettingService = (data: any) => {
  return axiosConfig.put(`${appSettingAPI}`, data);
};

export const getAppSettingService = () => {
  return axiosConfig.get(`${appSettingAPI}`);
};
