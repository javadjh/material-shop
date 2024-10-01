import { provideMaterialAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const insertProvideMaterial = (data: any) => {
  return axiosConfig.post(provideMaterialAPI, data);
};
