//command
import { InsertJobHandler } from './commands/InsertJobInfo.command';

//queries
import { GetJobsHandler } from './queries/GetJobs.query';

export default [
  //commands
  InsertJobHandler,

  //queries
  GetJobsHandler,
];
