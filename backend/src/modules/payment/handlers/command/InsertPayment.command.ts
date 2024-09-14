import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InsertPaymentRequestDto } from '../../dto/request/InsertPaymentRequest.dto';
import { User } from 'src/schema/user.schema';
import { Order, OrderDocument } from 'src/schema/order.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from 'src/schema/payment.schema';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';

export class InsertPaymentCommand {
  constructor(
    public readonly dto: InsertPaymentRequestDto,
    public readonly user: User,
  ) {}
}

@CommandHandler(InsertPaymentCommand)
export class InsertPaymentHandler
  implements ICommandHandler<InsertPaymentCommand>
{
  constructor(
    @InjectModel(Payment.name)
    private readonly payment: Model<PaymentDocument>,

    @InjectModel(Order.name)
    private readonly order: Model<OrderDocument>,
  ) {}
  async execute(command: InsertPaymentCommand): Promise<any> {
    const { dto, user } = command;

    //check order id
    dto?.orderId?.isObjectId();
    let order: any = await this.order.findById(dto?.orderId);

    const payment: Payment = await new this.payment({
      user: user?._id,
      order: dto?.orderId,
      payedPrice: dto?.payedPrice,
      paymentCode: dto?.paymentCode,
    }).save();

    if (!payment?._id) throw new InsertException();

    //change order tp paymed state
    order.isPayed = true;
    order.payment = payment?._id;
    await order.save();

    return Response.inserted();
  }
}
