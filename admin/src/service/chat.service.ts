import { IFilter } from "../types/filter.type";
import { chatAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const getAdminChatService = (paging: IFilter) => {
  return axiosConfig.get(`${chatAPI}admin`, {
    params: paging,
  });
};
export const getAdminUserChatsService = (paging: IFilter, userId: string) => {
  return axiosConfig.get(`${chatAPI}admin/user`, {
    params: { ...paging, ...{ userId } },
  });
};
export const insertChats = (data: any) => {
  return axiosConfig.post(chatAPI, data);
};
