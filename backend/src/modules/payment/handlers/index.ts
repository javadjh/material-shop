import { InsertPaymentHandler } from './command/InsertPayment.command';
import { GetPaymentsHandler } from './query/GetPayments.query';
import { GetUsersPaymentsHandler } from './query/GetUsersPayments.query';

export default [
  //commands
  InsertPaymentHandler,

  //queries
  GetPaymentsHandler,
  GetUsersPaymentsHandler,
];
