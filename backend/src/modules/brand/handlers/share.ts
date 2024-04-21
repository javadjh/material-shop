import { BadRequestException, Global, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RECORD_NOT_FOUND_ERROR_MESSAGE } from 'src/config/messages';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import { Brand, BrandDocument } from 'src/schema/barnd.schema';
import { City, CityDocument } from 'src/schema/city.schema';
import { Province, ProvinceDocument } from 'src/schema/province.schema';

@Global()
@Injectable()
export class BrandShareHandler {
  constructor(
    @InjectModel(Brand.name)
    private readonly brand: Model<BrandDocument>,
  ) {}
  async returnBrand(brandId: string): Promise<Brand> {
    brandId?.isObjectId();
    const brand = await this.brand.findById(brandId).lean();
    if (!brand?._id) throw new RecordNotFoundException();

    return brand;
  }
}
