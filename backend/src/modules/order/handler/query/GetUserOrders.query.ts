import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Order, OrderDocument } from 'src/schema/order.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { User } from 'src/schema/user.schema';
import { GetUsersOrderResponseData } from '../../dto/response/GetUsersOrderResponse.dto';

export class GetUsersOrdersQuery {
  constructor(public readonly filter: PagingDto, public readonly user: User) {}
}
@QueryHandler(GetUsersOrdersQuery)
export class GetUsersOrdersHandler
  implements IQueryHandler<GetUsersOrdersQuery>
{
  constructor(
    @InjectModel(Order.name)
    private readonly order: Model<OrderDocument>,
  ) {}
  async execute(query: GetUsersOrdersQuery): Promise<any> {
    const { user } = query;
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query.filter);

    const orders: Array<Order> = await this.order
      .find({
        user: user?._id,
      })
      .skip(skip)
      .limit(eachPerPage)
      .select('totalPrice orderList isPayed createdAt')
      .populate('orderList.product', 'title image')
      .sort({ createdAt: -1 })
      .lean();

    const total: number = await this.order
      .find({
        user: user?._id,
      })
      .count();

    orders?.map((item) => {
      item.createdAt = item?.createdAt?.toJalali();
    });

    let res: GetUsersOrderResponseData = { orders, total };

    return Response.send(res);
  }
}
