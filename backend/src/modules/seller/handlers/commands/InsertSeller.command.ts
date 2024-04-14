import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { InsertException } from 'src/filters/insertException.filter';
import { LocationShareHandler } from 'src/modules/location/handlers/share';
import { Seller, SellerDocument } from 'src/schema/seller.schema';
import { UpsertSellerRequestDto } from '../../dto/request/UpsertSellerRequest.dto';

export class InsertSellerCommand {
  constructor(public readonly dto: UpsertSellerRequestDto) {}
}
@CommandHandler(InsertSellerCommand)
export class InsertSellerHandler
  implements ICommandHandler<InsertSellerCommand>
{
  constructor(
    @InjectModel(Seller.name)
    private readonly seller: Model<SellerDocument>,

    private readonly loocation: LocationShareHandler,
  ) {}
  async execute(command: InsertSellerCommand): Promise<any> {
    const dto = command.dto;

    //get loocation

    const { city, province } = await this.loocation.returnlocationFromCityId(
      dto.cityId,
    );

    //insert logic
    let seller = await new this.seller({
      ...dto,
      ...{ city, province },
    }).save();

    if (!seller?._id) throw new InsertException();

    return Response.inserted();
  }
}
