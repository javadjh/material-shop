//commands
import { InsertUserStepOneHandler } from './commands/RegisterStepOne.command';
import { InsertUserStepTwoHandler } from './commands/RegisterStepTwo.command';
import { InsertUserStepThreeHandler } from './commands/RegisterStepThree.command';
import { UpdateUserHandler } from './commands/UpdateUser.command';

//queries
import { LoginHandler } from './queries/Login.query';
import { GetUsersHandler } from './queries/GetUsers.query';

export default [
  //commands
  InsertUserStepOneHandler,
  InsertUserStepTwoHandler,
  InsertUserStepThreeHandler,
  UpdateUserHandler,

  //queries
  LoginHandler,
  GetUsersHandler,
];
