import { BadRequestException } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CATEGORY_HAS_CHILD_ERROR_MESSAGE,
  RECORD_NOT_FOUND_ERROR_MESSAGE,
} from 'src/config/messages';
import { Response } from 'src/config/response';
import { Category, CategoryDocument } from 'src/schema/category.schema';

export class DeleteCategoryCommand {
  constructor(public readonly categoryId: string) {}
}
@CommandHandler(DeleteCategoryCommand)
export class DeleteCategoryHandler
  implements ICommandHandler<DeleteCategoryCommand>
{
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}
  async execute(command: DeleteCategoryCommand): Promise<any> {
    const { categoryId } = command;

    //validate object id
    categoryId.isObjectId();

    //find category
    const category = await this.categoryModel.findById(categoryId);

    //if category not found return an exeption
    if (!category?._id)
      throw new BadRequestException(RECORD_NOT_FOUND_ERROR_MESSAGE);

    //dose category has any child or not
    const childCount: number = await this.categoryModel
      .find({
        parentId: category?._id,
        isActive: true,
      })
      .count();

    if (childCount > 0)
      throw new BadRequestException(CATEGORY_HAS_CHILD_ERROR_MESSAGE);

    //TODO - ADD CATEGORY PRODUCT COUNT VALIDATION

    //change isActive filed
    category.isActive = false;

    //save category document
    await category.save();

    //return ok response
    return Response.deleted();
  }
}
