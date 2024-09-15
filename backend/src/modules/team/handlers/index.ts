//commands
import { DeleteTeamHandler } from './commands/DeleteTeam.command';
import { InsertTeamHandler } from './commands/InsertTeam.command';
import { UpdateTeamHandler } from './commands/UpdateTeam.command';

//queries
import { GetTeamsHandler } from './queries/GetTeams.query';

export default [
  //commands
  InsertTeamHandler,
  UpdateTeamHandler,
  DeleteTeamHandler,

  //queries
  GetTeamsHandler,
];
