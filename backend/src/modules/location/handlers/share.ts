import { BadRequestException, Global, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RECORD_NOT_FOUND_ERROR_MESSAGE } from 'src/config/messages';
import { City, CityDocument } from 'src/schema/city.schema';
import { Province, ProvinceDocument } from 'src/schema/province.schema';

@Global()
@Injectable()
export class LocationShareHandler {
  constructor(
    @InjectModel(City.name)
    private readonly cityModel: Model<CityDocument>,

    @InjectModel(Province.name)
    private readonly provinceModel: Model<ProvinceDocument>,
  ) {}
  async returnlocationFromCityId(cityId: number): Promise<{
    city: City;
    province: Province;
  }> {
    const city: City = await this.cityModel
      .findOne({
        id: cityId,
      })
      .select('-_id');

    if (!city?.id)
      throw new BadRequestException(RECORD_NOT_FOUND_ERROR_MESSAGE);

    //make province object
    const province: Province = await this.provinceModel
      .findOne({
        id: city?.province_id,
      })
      .select('-_id');
    if (!province?.id)
      throw new BadRequestException(RECORD_NOT_FOUND_ERROR_MESSAGE);

    return { city, province };
  }
}
