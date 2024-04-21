import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { PRODUCT_COUNT_ERROR_MESSAGE } from 'src/config/messages';
import { Basket, BasketDocument } from 'src/schema/basket.schema';
import { Response } from 'src/config/response';
import { ProductToBasketRequestDto } from '../../dto/request/ProductToBasketRequest.dto';

export class ProductToBasketCommand {
  constructor(public readonly dto: ProductToBasketRequestDto) {}
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
    const { dto } = command;

    //get product object
    let product = await this.productModel.findById(dto?.productId);

    if (product.remainingCount < dto.count)
      throw new BadRequestException(PRODUCT_COUNT_ERROR_MESSAGE);

    let oldBasket = await this.basketModel.findOne({ product: dto?.productId });
    if (oldBasket?._id) {
      if (oldBasket.count + dto.count > product.remainingCount)
        throw new BadRequestException(PRODUCT_COUNT_ERROR_MESSAGE);

      oldBasket.count = dto.count;
      oldBasket.save();
    } else {
      await new this.basketModel({
        product: dto.productId,
        count: dto.count,
      }).save();
    }

    return Response.inserted();
  }
}
