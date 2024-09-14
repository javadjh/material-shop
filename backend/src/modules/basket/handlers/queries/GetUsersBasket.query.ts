import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Basket, BasketDocument } from 'src/schema/basket.schema';
import { User } from 'src/schema/user.schema';

export class GetUsersBasketQuery {
  constructor(public readonly user: User) {}
}

@QueryHandler(GetUsersBasketQuery)
export class GetUsersBasketHandler
  implements IQueryHandler<GetUsersBasketQuery>
{
  constructor(
    @InjectModel(Basket.name)
    private readonly basketModel: Model<BasketDocument>,
  ) {}
  async execute(query: GetUsersBasketQuery): Promise<any> {
    const baskets: Array<Basket> = await this.basketModel
      .find({
        user: query?.user?._id,
      })
      .select('product count _id createdAt brand category')
      .populate([
        {
          path: 'product',
          model: 'Product',
          select:
            'title image price code postPrice brand category unit sendWay',
          populate: [
            {
              path: 'brand',
              model: 'Brand',
              select: 'title',
            },
            {
              path: 'category',
              model: 'Category',
              select: 'title',
            },
          ],
        },
        ,
      ])
      .lean();
    let totalPrice: number = 0;
    baskets?.map((item) => {
      console.log(item);

      item.createdAt = item?.createdAt?.toJalali();
      totalPrice += item?.product?.price * item?.count;
      item.product.categoryName = item.product.category?.title;
      item.product.brandName = item.product.brand?.title;
      item.product.totalPrice = item?.product?.price * item?.count;
      delete item.product.category;
      delete item.product.brand;
      console.log(item?.product?.price, item?.count);
      console.log(item?.product?.price * item?.count);
      console.log(item);
    });

    return Response.send({
      totalPrice,
      baskets,
    });
  }
}
