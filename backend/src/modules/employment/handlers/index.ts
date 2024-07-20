//command
import { InsertEmploymentHandler } from './commands/InsertEmployment.command';

//queries
import { GetEmploymentsHandler } from './queries/GetEmployments.query';

export default [
  //commands
  InsertEmploymentHandler,

  //queries
  GetEmploymentsHandler,
];
