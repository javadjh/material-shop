/**
 * this handler has share handler for other handlers or etc
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from 'src/schema/category.schema';
import { Types } from 'mongoose';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';

@Injectable()
export class CategoryShareHandler {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}
  /**
   * in this function we recieve the parentId , after that we find and return
   * previousParents , find the main category
   * @param parentId
   */
  async previousParentsList(parentId: string): Promise<Array<Types.ObjectId>> {
    let isMainParentFound = false;
    let previousParents = [];
    let parent = parentId;
    do {
      const previousCategory = await this.categoryModel.findOne({
        _id: parent,
      });
      parent = previousCategory.parentId;
      if (previousCategory.isMain) isMainParentFound = true;
      previousParents.push(previousCategory._id);
    } while (!isMainParentFound);
    return previousParents;
  }

  async returnCategoryObject(id: string): Promise<Category> {
    id.isObjectId();

    const category = await this.categoryModel.findById(id);
    if (!category?._id) throw new RecordNotFoundException();

    return category;
  }
}
