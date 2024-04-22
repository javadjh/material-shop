//command
import { DeleteJobInfoHandler } from './commands/DeleteJonInfo.command';
import { InsertJobInfoHandler } from './commands/InsertJobInfo.command';
import { UpdateJobInfoHandler } from './commands/UpdateJobInfo.command';

//queries
import { GetJobInfoDepartmentsHandler } from './queries/GetJobInfoDepartments.query';
import { GetJobInfoHandler } from './queries/GetJonInfo.query';
import { GetJobInfosHandler } from './queries/GetJobInfos.query';
export default [
  //commands
  DeleteJobInfoHandler,
  InsertJobInfoHandler,
  UpdateJobInfoHandler,

  //queries
  GetJobInfoDepartmentsHandler,
  GetJobInfoHandler,
  GetJobInfosHandler,
];
