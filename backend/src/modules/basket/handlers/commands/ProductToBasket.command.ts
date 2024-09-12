import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { PRODUCT_COUNT_ERROR_MESSAGE } from 'src/config/messages';
import { Basket, BasketDocument } from 'src/schema/basket.schema';
import { Response } from 'src/config/response';
import { ProductToBasketRequestDto } from '../../dto/request/ProductToBasketRequest.dto';
import { User } from 'src/schema/user.schema';

export class ProductToBasketCommand {
  constructor(
    public readonly dto: ProductToBasketRequestDto,
    public readonly user: User,
  ) {}
}

@CommandHandler(ProductToBasketCommand)
export class ProductToBasketHandler
  implements ICommandHandler<ProductToBasketCommand>
{
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,

    @InjectModel(Basket.name)
    private readonly basketModel: Model<BasketDocument>,
  ) {}
  async execute(command: ProductToBasketCommand): Promise<any> {
    const { dto, user } = command;

    //get product object
    let product = await this.productModel.findById(dto?.productId);

    if (product.remainingCount < dto.count)
      throw new BadRequestException(PRODUCT_COUNT_ERROR_MESSAGE);

    let oldBasket = await this.basketModel.findOne({ product: dto?.productId });
    console.log(oldBasket);

    if (oldBasket?._id) {
      if (oldBasket.count + dto.count > product.remainingCount)
        throw new BadRequestException(PRODUCT_COUNT_ERROR_MESSAGE);

      oldBasket.count += dto.count;
      oldBasket.save();
    } else {
      console.log('dddddddd');

      await new this.basketModel({
        product: dto.productId,
        count: dto.count,
        user: user?._id,
      }).save();
    }

    await this.productModel?.findByIdAndUpdate(dto.productId, {
      $set: {
        remainingCount: product.remainingCount - dto.count,
      },
    });

    return Response.inserted();
  }
}
