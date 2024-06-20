import { appSettingAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const getAppSettingService = () => {
  return axiosConfig.get(`${appSettingAPI}`);
};
