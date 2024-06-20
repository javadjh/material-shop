import { getAppSettingService } from "../service/appsetting.service";

export const appsettingData = async (): Promise<any> => {
  const {
    data: { data: res },
  } = await getAppSettingService();

  console.log(res.data);

  return res.data;
};
