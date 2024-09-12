import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { InsertException } from 'src/filters/insertException.filter';
import { Basket, BasketDocument } from 'src/schema/basket.schema';
import { Order, OrderDocument, orderListEmbed } from 'src/schema/order.schema';
import { User } from 'src/schema/user.schema';

export class InsertOrderCommand {
  constructor(public readonly user: User) {}
}

@CommandHandler(InsertOrderCommand)
export class InsertOrderHandler implements ICommandHandler<InsertOrderCommand> {
  constructor(
    @InjectModel(Order.name)
    private readonly order: Model<OrderDocument>,

    @InjectModel(Basket.name)
    private readonly basket: Model<BasketDocument>,
  ) {}
  async execute(command: InsertOrderCommand): Promise<any> {
    const { user } = command;

    //get baskets
    const baskets: Array<Basket> = await this.basket
      .find({
        user: user?._id,
      })
      .populate('product');

    console.log('basketsbasketsbasketsbasketsbasketsbaskets', {
      user: user?._id,
    });
    console.log(baskets);

    //make order list using basket data
    let orderList: Array<orderListEmbed> = [];
    let totalPrice: number = 0;
    baskets?.map((item) => {
      orderList.push({
        count: item?.count,
        price: item?.product?.price * item?.count,
        product: item?.product?._id,
      });
      totalPrice += item?.product?.price * item?.count;
    });

    //add baskets to aa order
    const order: Order = await new this.order({
      user: user?._id,
      totalPrice,
      orderList,
    }).save();

    if (!order?._id) throw new InsertException();

    //delete users basket
    await this.basket.deleteMany({
      user: user?._id,
    });

    //return ok response

    return Response.inserted();
  }
}
