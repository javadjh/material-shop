//commands
import { InsertTeamHandler } from './commands/InsertTeam.command';
import { UpdateTeamHandler } from './commands/UpdateTeam.command';

//queries
import { GetTeamsHandler } from './queries/GetTeams.query';

export default [
  //commands
  InsertTeamHandler,
  UpdateTeamHandler,

  //queries
  GetTeamsHandler,
];
