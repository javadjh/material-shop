import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetSwapResponseData } from '../../dto/response/GetSwapResponse.dto';
import { Swap, SwapDocument } from 'src/schema/swap.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';

export class GetSwapsQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetSwapsQuery)
export class GetSwapsHandler implements IQueryHandler<GetSwapsQuery> {
  constructor(
    @InjectModel(Swap.name)
    private readonly swap: Model<SwapDocument>,
  ) {}
  async execute(query: GetSwapsQuery): Promise<any> {
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query?.filter);

    const swaps: Array<Swap> = await this.swap
      .find()
      .skip(skip)
      .limit(eachPerPage)
      .sort({ createdAt: -1 })
      .select(
        `fullName
         phoneNumber
         city
         province
         file
         description
         activity`,
      )
      .lean();

    const total: number = await this.swap.find().count();

    swaps?.map((item) => {
      item.createdAt = item?.createdAt?.toJalali();
      item.cityName = item?.city?.name;
      item.provinceName = item?.province?.name;
    });

    let response: GetSwapResponseData = { total, list: swaps };
    return Response.send(response);
  }
}
