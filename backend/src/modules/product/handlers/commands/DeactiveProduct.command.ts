import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { UpsertProductInfoRequestDto } from '../../dto/request/UpsertProductRequest.dto';
import { Response } from 'src/config/response';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';

export class DeleteProductCommand {
  constructor(public readonly id: string) {}
}
@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler
  implements ICommandHandler<DeleteProductCommand>
{
  constructor(
    @InjectModel(Product.name)
    private readonly product: Model<ProductDocument>,
  ) {}
  async execute(command: DeleteProductCommand): Promise<any> {
    const { id } = command;

    id.isObjectId();
    let productObj: Product = await this.product.findById(id);
    if (!productObj?._id) throw new RecordNotFoundException();

    let product = await this.product.findByIdAndUpdate(id, { isActive: false });

    if (!product?._id) throw new RecordNotFoundException();

    return Response.deleted();
  }
}
