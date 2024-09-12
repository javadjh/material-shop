import { InsertOrderHandler } from './command/InsertOrder.command';
import { GetOrdersHandler } from './query/GetOrders.query';
import { GetUsersOrdersHandler } from './query/GetUserOrders.query';

export default [
  //command
  InsertOrderHandler,

  //queries
  GetOrdersHandler,
  GetUsersOrdersHandler,
];
