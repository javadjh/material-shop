//command
import { InsertReportHandler } from './commands/InsertReport.command';

//queries
import { GetReportsHandler } from './queries/GetReports.query';

export default [
  //commands
  InsertReportHandler,

  //queries
  GetReportsHandler,
];
