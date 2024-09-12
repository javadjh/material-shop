import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Payment, PaymentDocument } from 'src/schema/payment.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { User } from 'src/schema/user.schema';
import { GetUsersPaymentsResponseData } from '../../dto/response/GetUsersPaymentsResponse.dto';

export class GetUsersPaymentsQuery {
  constructor(public readonly filter: PagingDto, public readonly user: User) {}
}
@QueryHandler(GetUsersPaymentsQuery)
export class GetUsersPaymentsHandler
  implements IQueryHandler<GetUsersPaymentsQuery>
{
  constructor(
    @InjectModel(Payment.name)
    private readonly payment: Model<PaymentDocument>,
  ) {}
  async execute(query: GetUsersPaymentsQuery): Promise<any> {
    const { user } = query;
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query.filter);

    const payments: Array<Payment> = await this.payment
      .find({
        user: user?._id,
      })
      .skip(skip)
      .limit(eachPerPage)
      .select('createdAt order paymentCode payedPrice')
      .populate([
        {
          path: 'order',
          model: 'Order',
          select: 'totalPrice orderList',
          populate: {
            path: 'orderList.product',
            model: 'Product',
            select: 'title image',
          },
        },
      ])

      .sort({ createdAt: -1 })
      .lean();

    const total: number = await this.payment
      .find({
        user: user?._id,
      })
      .count();

    payments?.map((item) => {
      item.createdAt = item?.createdAt?.toJalali();
    });

    let res: GetUsersPaymentsResponseData = { payments, total };

    return Response.send(res);
  }
}
