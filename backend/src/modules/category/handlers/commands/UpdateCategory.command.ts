import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateCategoryRequestDto } from '../../dto/request/UpdateCategoryRequest.dto';
import { Response } from 'src/config/response';
import { InjectModel } from '@nestjs/mongoose';
import { Category, CategoryDocument } from 'src/schema/category.schema';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common';
import { RECORD_NOT_FOUND_ERROR_MESSAGE } from 'src/config/messages';
import { Product, ProductDocument } from 'src/schema/product.schema';

export class UpdateCategoryCommand {
  constructor(
    public readonly dto: UpdateCategoryRequestDto,
    public readonly categoryId: string,
  ) {}
}
@CommandHandler(UpdateCategoryCommand)
export class UpdateCategoryHandler
  implements ICommandHandler<UpdateCategoryCommand>
{
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,

    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}
  async execute(command: UpdateCategoryCommand): Promise<any> {
    const { categoryId, dto } = command;

    //validate object id
    categoryId?.isObjectId();

    //find category
    const category = await this.categoryModel.findById(categoryId);

    //validate is category found or not
    if (!category?._id)
      throw new BadRequestException(RECORD_NOT_FOUND_ERROR_MESSAGE);

    //update title and icon variable
    category.title = dto.title;
    category.icon = dto.icon;
    category.index = dto.index;
    category.isHighConsumption = dto.isHighConsumption;

    //save document
    await category.save();

    //update product isHighConsumption
    await this.productModel.updateMany(
      {
        category: category?._id,
      },
      {
        isHighConsumption: dto?.isHighConsumption,
      },
    );

    //return ok response
    return Response.updated();
  }
}
