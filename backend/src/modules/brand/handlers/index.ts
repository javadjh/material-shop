//command
import { UpdateBrandHandler } from './commands/UpdateBrand.command';
import { InsertBrandHandler } from './commands/InsertBrand.command';

//queries
import { GetBrandsHandler } from './queries/GetBrands.query';

export default [
  //commands
  InsertBrandHandler,
  UpdateBrandHandler,

  //queries
  GetBrandsHandler,
];
