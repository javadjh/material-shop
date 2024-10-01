import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { InsertProvideMaterialRequestDto } from '../../dto/request/InsertProvideMaterialRequest.dto';
import {
  ProvideMaterial,
  ProvideMaterialDocument,
} from 'src/schema/provide-material.schema';
import { LocationShareHandler } from 'src/modules/location/handlers/share';

export class InsertProvideMaterialCommand {
  constructor(public readonly dto: InsertProvideMaterialRequestDto) {}
}
@CommandHandler(InsertProvideMaterialCommand)
export class InsertProvideMaterialHandler
  implements ICommandHandler<InsertProvideMaterialCommand>
{
  constructor(
    @InjectModel(ProvideMaterial.name)
    private readonly provideMaterial: Model<ProvideMaterialDocument>,

    private readonly location: LocationShareHandler,
  ) {}
  async execute(command: InsertProvideMaterialCommand): Promise<any> {
    const { dto } = command;

    let { city, province } = await this.location?.returnlocationFromCityId(
      dto?.cityId,
    );

    //save provideMaterial
    const provideMaterial = await new this.provideMaterial({
      ...dto,
      ...{ city, province },
    }).save();

    if (!provideMaterial?._id) throw new InsertException();

    return Response.inserted();
  }
}
