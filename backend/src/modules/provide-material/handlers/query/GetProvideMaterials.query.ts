import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetProvideMaterialResponseData } from '../../dto/response/GetProvideMaterialResponse.dto';
import {
  ProvideMaterial,
  ProvideMaterialDocument,
} from 'src/schema/provide-material.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';

export class GetProvideMaterialsQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetProvideMaterialsQuery)
export class GetProvideMaterialsHandler
  implements IQueryHandler<GetProvideMaterialsQuery>
{
  constructor(
    @InjectModel(ProvideMaterial.name)
    private readonly provideMaterial: Model<ProvideMaterialDocument>,
  ) {}
  async execute(query: GetProvideMaterialsQuery): Promise<any> {
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query?.filter);

    const provideMaterials: Array<ProvideMaterial> = await this.provideMaterial
      .find()
      .skip(skip)
      .limit(eachPerPage)
      .sort({ createdAt: -1 })
      .select(
        `fullName
         phoneNumber
         city
         createdAt
         province
         description
         projectName`,
      )
      .lean();

    const total: number = await this.provideMaterial.find().count();

    provideMaterials?.map((item) => {
      item.createdAt = item?.createdAt?.toJalali();
      item.cityName = item?.city?.name;
      item.provinceName = item?.province?.name;
    });

    let response: GetProvideMaterialResponseData = {
      total,
      list: provideMaterials,
    };
    return Response.send(response);
  }
}
