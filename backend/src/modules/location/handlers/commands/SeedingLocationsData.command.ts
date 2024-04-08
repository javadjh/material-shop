import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Seed } from 'src/config/seed';
import { City, CityDocument } from 'src/schema/city.schema';
import { Province, ProvinceDocument } from 'src/schema/province.schema';

export class SeedingLocationsDataCommand {}
@CommandHandler(SeedingLocationsDataCommand)
export class SeedingLocationsDataHandler
  implements ICommandHandler<SeedingLocationsDataCommand>
{
  constructor(
    @InjectModel(City.name)
    private readonly cityModel: Model<CityDocument>,
    @InjectModel(Province.name)
    private readonly provinceModel: Model<ProvinceDocument>,
    private readonly seedData: Seed,
  ) {}
  async execute(command: SeedingLocationsDataCommand): Promise<any> {
    const cityCount = await this.cityModel.find().count();
    const provinceCount = await this.provinceModel.find().count();
    if (cityCount === 0) await this.cityModel.insertMany(this.seedData.city());
    if (provinceCount === 0)
      await this.provinceModel.insertMany(this.seedData.province());

    return Response.inserted();
  }
}
