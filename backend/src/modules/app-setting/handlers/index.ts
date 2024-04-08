//commands
import { UpdateAppSettingHandler } from './commands/UpdateAppSetting.command';

//queries
import { GetAppSettingHandler } from './queries/GetAppSetting.query';

export default [
  //commands
  UpdateAppSettingHandler,

  //queries
  GetAppSettingHandler,
];
