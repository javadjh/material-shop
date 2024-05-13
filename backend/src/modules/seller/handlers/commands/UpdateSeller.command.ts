import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';

import { LocationShareHandler } from 'src/modules/location/handlers/share';
import { Seller, SellerDocument } from 'src/schema/seller.schema';
import { UpsertSellerRequestDto } from '../../dto/request/UpsertSellerRequest.dto';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import { City } from 'src/schema/city.schema';
import { Province } from 'src/schema/province.schema';

export class UpdateSellerCommand {
  constructor(
    public readonly dto: UpsertSellerRequestDto,
    public readonly id: string,
  ) {}
}
@CommandHandler(UpdateSellerCommand)
export class UpdateSellerHandler
  implements ICommandHandler<UpdateSellerCommand>
{
  constructor(
    @InjectModel(Seller.name)
    private readonly seller: Model<SellerDocument>,

    private readonly loocation: LocationShareHandler,
  ) {}
  async execute(command: UpdateSellerCommand): Promise<any> {
    const { dto, id } = command;

    //check is record found
    id.isObjectId();
    let sellerObject = await this.seller.findById(id);
    if (!sellerObject?._id) throw new RecordNotFoundException();

    //get loocation
    let city: City = sellerObject.city;
    let province: Province = sellerObject.province;

    if (dto.cityId) {
      const location = await this.loocation.returnlocationFromCityId(
        dto.cityId,
      );
      city = location.city;
      province = location.province;
    }

    //Update logic
    await this.seller.findByIdAndUpdate(id, {
      $set: {
        ...dto,
        ...{ city, province },
      },
    });

    return Response.updated();
  }
}
