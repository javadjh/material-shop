import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { UpsertProductInfoRequestDto } from '../../dto/request/UpsertProductRequest.dto';
import { CategoryShareHandler } from 'src/modules/category/handlers/share';
import { BrandShareHandler } from 'src/modules/brand/handlers/share';
import { RecordRepeatedException } from 'src/filters/record-repeated.filter';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';

export class InsertProductCommand {
  constructor(public readonly dto: UpsertProductInfoRequestDto) {}
}
@CommandHandler(InsertProductCommand)
export class InsertProductHandler
  implements ICommandHandler<InsertProductCommand>
{
  constructor(
    @InjectModel(Product.name)
    private readonly product: Model<ProductDocument>,

    private readonly categoryShare: CategoryShareHandler,
    private readonly brandShareHandler: BrandShareHandler,
  ) {}
  async execute(command: InsertProductCommand): Promise<any> {
    const { dto } = command;

    //get category
    const category = await this.categoryShare.returnCategoryObject(
      dto.categoryId,
    );

    //get brand
    const brand = await this.brandShareHandler.returnBrand(dto.brandId);

    let sellers = dto.sellerIds;

    //check is product code found or not
    const productCode = await this.product.findOne({ code: dto.code });
    if (productCode?._id) throw new RecordRepeatedException();

    const product = await new this.product({
      ...dto,
      ...{
        category: category?._id,
        brand: brand._id,
        sellers,
        isHighConsumption: category?.isHighConsumption,
      },
    }).save();

    if (!product?._id) throw new InsertException();

    return Response.inserted();
  }
}
