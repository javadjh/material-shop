import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Province, ProvinceDocument } from 'src/schema/province.schema';
import { GetProvincesData } from '../../dto/response/GetProvinces.dto';
import { Response } from 'src/config/response';
import { City, CityDocument } from 'src/schema/city.schema';
import { GetCitiesData } from '../../dto/response/GetCities.dto';

export class GetCitiesQuery {
  constructor(public readonly provinceId: number) {}
}
@QueryHandler(GetCitiesQuery)
export class GetCitiesHandler implements IQueryHandler<GetCitiesQuery> {
  constructor(
    @InjectModel(City.name)
    private readonly cityModel: Model<CityDocument>,
  ) {}
  async execute(query: GetCitiesQuery): Promise<any> {
    const cities = await this.cityModel
      .find({
        province_id: query?.provinceId,
      })
      .select('name slug id province_id -_id');

    let res: GetCitiesData = { list: cities };

    return Response.send(res);
  }
}
