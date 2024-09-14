import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Payment, PaymentDocument } from 'src/schema/payment.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetPaymentResponseData } from '../../dto/response/GetPaymentsResponse.dto';

export class GetPaymentsQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetPaymentsQuery)
export class GetPaymentsHandler implements IQueryHandler<GetPaymentsQuery> {
  constructor(
    @InjectModel(Payment.name)
    private readonly payment: Model<PaymentDocument>,
  ) {}
  async execute(query: GetPaymentsQuery): Promise<any> {
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query.filter);

    const payments: Array<Payment> = await this.payment
      .find()
      .skip(skip)
      .limit(eachPerPage)
      .select('createdAt order paymentCode payedPrice')
      .populate([
        {
          path: 'order',
          model: 'Order',
          select: 'orderList totalPrice',
          populate: [
            {
              path: 'orderList.product',
              model: 'Product',
              select: 'title image',
            },
          ],
        },
      ])
      .populate('user', 'userName firstName lastName phone ')
      .sort({ createdAt: -1 })
      .lean();

    const total: number = await this.payment.find().count();

    payments?.map((item) => {
      item.createdAt = item?.createdAt?.toJalali();
    });

    let res: GetPaymentResponseData = { payments, total };

    return Response.send(res);
  }
}
