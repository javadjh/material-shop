import { ProductToBasketHandler } from './commands/ProductToBasket.command';
import { RemoveProductFromBasketHandler } from './commands/RemoveProductFromBasket.command';
import { GetUsersBasketHandler } from './queries/GetUsersBasket.query';

export default [
  //commands
  ProductToBasketHandler,
  RemoveProductFromBasketHandler,

  //query
  GetUsersBasketHandler,
];
