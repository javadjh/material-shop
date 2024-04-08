import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Province, ProvinceDocument } from 'src/schema/province.schema';
import { GetProvincesData } from '../../dto/response/GetProvinces.dto';
import { Response } from 'src/config/response';

export class GetProvincesQuery {}
@QueryHandler(GetProvincesQuery)
export class GetProvincesHandler implements IQueryHandler<GetProvincesQuery> {
  constructor(
    @InjectModel(Province.name)
    private readonly provinceModel: Model<ProvinceDocument>,
  ) {}
  async execute(query: GetProvincesQuery): Promise<any> {
    const provinces = await this.provinceModel
      .find()
      .select('name slug id -_id');

    let res: GetProvincesData = { list: provinces };

    return Response.send(res);
  }
}
