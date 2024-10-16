import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schema/product.schema';
import { UpsertProductInfoRequestDto } from '../../dto/request/UpsertProductRequest.dto';
import { CategoryShareHandler } from 'src/modules/category/handlers/share';
import { BrandShareHandler } from 'src/modules/brand/handlers/share';
import { RecordRepeatedException } from 'src/filters/record-repeated.filter';
import { Response } from 'src/config/response';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import { Category } from 'src/schema/category.schema';

export class UpdateProductCommand {
  constructor(
    public readonly dto: UpsertProductInfoRequestDto,
    public readonly id: string,
  ) {}
}
@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler
  implements ICommandHandler<UpdateProductCommand>
{
  constructor(
    @InjectModel(Product.name)
    private readonly product: Model<ProductDocument>,

    private readonly categoryShare: CategoryShareHandler,
    private readonly brandShareHandler: BrandShareHandler,
  ) {}
  async execute(command: UpdateProductCommand): Promise<any> {
    const { dto, id } = command;

    id.isObjectId();
    let productObj: Product = await this.product.findById(id);
    if (!productObj?._id) throw new RecordNotFoundException();

    //get category
    let category: Category = productObj.category;
    if (dto.categoryId)
      category = await this.categoryShare.returnCategoryObject(dto.categoryId);

    //get brand
    let brand: string = productObj?._id;
    if (dto.brandId)
      brand = (await this.brandShareHandler.returnBrand(dto.brandId))?._id;

    let sellers = dto.sellerIds;

    //check is product code found or not
    const productCode = await this.product.findOne({
      code: dto.code,
      _id: {
        $ne: id,
      },
    });
    if (productCode?._id) throw new RecordRepeatedException();

    const product = await this.product.findByIdAndUpdate(id, {
      ...dto,
      ...{
        category: category?._id,
        brand: brand,
        sellers,
        isHighConsumption: category?.isHighConsumption,
      },
    });

    if (!product?._id) throw new RecordNotFoundException();

    return Response.updated();
  }
}
