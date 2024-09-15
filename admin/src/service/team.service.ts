import { ITeam } from "../types/team.type";
import { teamAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const teamsService = () => {
  return axiosConfig.get(teamAPI);
};

export const insertTeamService = (data: ITeam) => {
  return axiosConfig.post(teamAPI, data);
};

export const updateTeamService = (data: ITeam, id?: string) => {
  return axiosConfig.put(`${teamAPI}${id}`, data);
};

export const deleteTeamService = (id: string) => {
  return axiosConfig.delete(`${teamAPI}${id}`);
};
