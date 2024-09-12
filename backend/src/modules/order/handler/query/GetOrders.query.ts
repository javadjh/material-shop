import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Order, OrderDocument } from 'src/schema/order.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetUsersOrderResponseData } from '../../dto/response/GetUsersOrderResponse.dto';
import { GetOrderResponseData } from '../../dto/response/GetOrdersResponse.dto';

export class GetOrdersQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetOrdersQuery)
export class GetOrdersHandler implements IQueryHandler<GetOrdersQuery> {
  constructor(
    @InjectModel(Order.name)
    private readonly order: Model<OrderDocument>,
  ) {}
  async execute(query: GetOrdersQuery): Promise<any> {
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query.filter);

    const orders: Array<Order> = await this.order
      .find()
      .skip(skip)
      .limit(eachPerPage)
      .select('totalPrice orderList isPayed user createdAt')
      .populate('orderList.product', 'title image')
      .populate('user', 'userName firstName lastName phone ')
      .sort({ createdAt: -1 })
      .lean();

    const total: number = await this.order.find().count();

    let res: GetOrderResponseData = { orders, total };

    return Response.send(res);
  }
}
