//command
import { InsertSellerHandler } from './commands/InsertSeller.command';
import { UpdateSellerHandler } from './commands/UpdateSeller.command';
import { DeleteSellerHandler } from './commands/DeleteSeller.command';

//queries
import { GetSellersHandler } from './queries/GetSellers.query';

export default [
  //commands
  InsertSellerHandler,
  UpdateSellerHandler,
  DeleteSellerHandler,

  //queries
  GetSellersHandler,
];
