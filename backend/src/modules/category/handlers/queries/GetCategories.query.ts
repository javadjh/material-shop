import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetCategoriesRequestDto } from '../../dto/request/GetCategoriesRequest.dto';
import { Category, CategoryDocument } from 'src/schema/category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GetCategoriesResponseData } from '../../dto/response/GetCategoriesResponse.dto';
import { Response } from 'src/config/response';

export class GetCategoriesQuery {
  constructor(public readonly dto: GetCategoriesRequestDto) {}
}
@QueryHandler(GetCategoriesQuery)
export class GetCategoriesHandler implements IQueryHandler<GetCategoriesQuery> {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}
  async execute(query: GetCategoriesQuery): Promise<any> {
    const { parentId } = query.dto;

    //make filter object
    let filter = {
      isActive: true,
      isMain: true,
    };

    //check is parent id sent from request or not
    if (parentId) {
      parentId?.isObjectId();
      filter = {
        ...filter,
        ...{ isMain: false, parentId: parentId?.toObjectId() },
      };
    }

    //find categories
    const categories: Array<Category> = await this.categoryModel
      .find(filter)
      .sort({ index: 1 })
      .select(
        'title isMain parentId icon index isHighConsumption previousParents',
      )
      .lean();

    categories?.map((item) => {
      item.previousParentCount = item?.previousParents?.length;
      delete item?.previousParents;
    });

    //send category list
    let res: GetCategoriesResponseData = { list: categories };

    return Response.send(res);
  }
}
