import { teamAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const teamsService = () => {
  return axiosConfig.get(teamAPI);
};
