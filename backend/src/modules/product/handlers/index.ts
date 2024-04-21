//commands
import { InsertProductHandler } from '../handlers/commands/InsertProduct.command';
import { UpdateProductHandler } from '../handlers/commands/UpdateProduct.command';
import { DeleteProductHandler } from '../handlers/commands/DeactiveProduct.command';

//query
import { GetProductsHandler } from '../handlers/queries/GetProducts.query';
import { GetProductHandler } from '../handlers/queries/GetProduct.query';

export default [
  //commands
  InsertProductHandler,
  UpdateProductHandler,
  DeleteProductHandler,

  //query
  GetProductsHandler,
  GetProductHandler,
];
