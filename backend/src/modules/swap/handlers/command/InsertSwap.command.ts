import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { InsertSwapRequestDto } from '../../dto/request/InsertSwapRequest.dto';
import { Swap, SwapDocument } from 'src/schema/swap.schema';
import { LocationShareHandler } from 'src/modules/location/handlers/share';

export class InsertSwapCommand {
  constructor(public readonly dto: InsertSwapRequestDto) {}
}
@CommandHandler(InsertSwapCommand)
export class InsertSwapHandler implements ICommandHandler<InsertSwapCommand> {
  constructor(
    @InjectModel(Swap.name)
    private readonly swap: Model<SwapDocument>,

    private readonly location: LocationShareHandler,
  ) {}
  async execute(command: InsertSwapCommand): Promise<any> {
    const { dto } = command;

    let { city, province } = await this.location?.returnlocationFromCityId(
      dto?.cityId,
    );

    //save swap
    const swap = await new this.swap({
      ...dto,
      ...{ city, province },
    }).save();

    if (!swap?._id) throw new InsertException();

    return Response.inserted();
  }
}
