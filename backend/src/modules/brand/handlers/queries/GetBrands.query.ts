import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetBrandsResponseDto } from '../../dto/response/GetBrandResponse.dto';
import { Brand, BrandDocument } from 'src/schema/barnd.schema';

export class GetBrandsQuery {
  constructor() {}
}
@QueryHandler(GetBrandsQuery)
export class GetBrandsHandler implements IQueryHandler<GetBrandsQuery> {
  constructor(
    @InjectModel(Brand.name)
    private readonly barnd: Model<BrandDocument>,
  ) {}
  async execute(query: GetBrandsQuery): Promise<any> {
    const jobs = await this.barnd.find().select(`title logo`).lean();

    let response: GetBrandsResponseDto = { data: jobs };
    return Response.send(response.data);
  }
}
