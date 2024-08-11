/**
 * in this handler we insert category
 * categories has un limit child
 * if parent id set to document, category is not mother
 * for find mothers children , we have share service
 */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schema/category.schema';
import { InsertCategoryRequestDto } from '../../dto/request/InsertCategoryRequest.dto';
import { BadRequestException } from '@nestjs/common';
import {
  INSERT_ERROR_MESSAGE,
  PARENT_OF_CATEGORY_NOT_FOUND_ERROR_MESSAGE,
} from 'src/config/messages';
import { CategoryShareHandler } from '../share';
import { Response } from 'src/config/response';

export class InsertCategoryCommannd {
  constructor(public readonly dto: InsertCategoryRequestDto) {}
}
@CommandHandler(InsertCategoryCommannd)
export class InsertCategoryHandler
  implements ICommandHandler<InsertCategoryCommannd>
{
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,

    private readonly categoryShare: CategoryShareHandler,
  ) {}
  async execute(command: InsertCategoryCommannd): Promise<any> {
    const { dto } = command;
    let isMain: boolean = true;
    let parent: Category = {};

    if (dto.parentId) {
      //if employee send parent id we should validate that
      dto?.parentId?.isObjectId();
      parent = await this.categoryModel.findById(dto.parentId);
      if (!parent?._id)
        throw new BadRequestException(
          PARENT_OF_CATEGORY_NOT_FOUND_ERROR_MESSAGE,
        );
      isMain = false;

      //check count condition
      const paretnCategoriesCount: number = await this.categoryModel
        .find({ parentId: dto.parentId, isActive: true })
        .count();

      if (paretnCategoriesCount >= 9) {
        throw new BadRequestException(INSERT_ERROR_MESSAGE);
      }
    } else {
      //check is category gte 15
      const categoryCount: number = await this.categoryModel
        .find({ isActive: true, isMain: true })
        .count();
      if (categoryCount >= 15)
        throw new BadRequestException(INSERT_ERROR_MESSAGE);
    }

    let data: Category = {
      title: dto?.title,
      isMain,
      parentId: parent?._id,
      index: dto?.index,
    };
    //init previousParents for children categoery (to save on db)
    if (!isMain) {
      data.previousParents = await this.categoryShare.previousParentsList(
        dto.parentId,
      );
    }
    //create new category object on db
    const category = await new this.categoryModel(data).save();
    if (!category) throw new BadRequestException(INSERT_ERROR_MESSAGE);

    //return ok response
    return Response.inserted();
  }
}
