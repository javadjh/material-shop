import { getCookie } from "cookies-next";
import { IFilter } from "../types/filter.type";
import { chatsAPI, employmentAPI } from "./APIRoutes";
import axiosConfig from "./axiosConfig";

export const getChats = (paging: IFilter) => {
  return axiosConfig.get(chatsAPI, {
    params: paging,
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};

export const insertChats = (data: any) => {
  return axiosConfig.post(chatsAPI, data, {
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};

export const unseenUserChatsService = () => {
  return axiosConfig.get(`${chatsAPI}unseen`, {
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};
