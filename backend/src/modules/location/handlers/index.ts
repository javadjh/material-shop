//commands
import { SeedingLocationsDataHandler } from './commands/SeedingLocationsData.command';

//queries
import { GetProvincesHandler } from './queries/GetProvinces.query';
import { GetCitiesHandler } from './queries/GetCities.query';

export default [
  //commands
  SeedingLocationsDataHandler,

  //queries
  GetProvincesHandler,
  GetCitiesHandler,
];
