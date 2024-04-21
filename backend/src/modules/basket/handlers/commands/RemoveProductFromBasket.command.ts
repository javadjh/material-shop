import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { PRODUCT_COUNT_ERROR_MESSAGE } from 'src/config/messages';
import { Basket, BasketDocument } from 'src/schema/basket.schema';
import { Response } from 'src/config/response';
import { RemoveProductFromBasketRequestDto } from '../../dto/request/RemoveProductFromBasketRequest.dto';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';

export class RemoveProductFromBasketCommand {
  constructor(public readonly dto: RemoveProductFromBasketRequestDto) {}
}

@CommandHandler(RemoveProductFromBasketCommand)
export class RemoveProductFromBasketHandler
  implements ICommandHandler<RemoveProductFromBasketCommand>
{
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,

    @InjectModel(Basket.name)
    private readonly basketModel: Model<BasketDocument>,
  ) {}
  async execute(command: RemoveProductFromBasketCommand): Promise<any> {
    const { dto } = command;

    const basket = await this.basketModel.findById(dto.basketId);
    if (!basket?._id) throw new RecordNotFoundException();

    let product = await this.productModel.findById(basket.product);

    product.remainingCount = product.remainingCount + basket.count;
    await product.save();

    await this.basketModel.findByIdAndRemove(dto.basketId);

    return Response.deleted();
  }
}
