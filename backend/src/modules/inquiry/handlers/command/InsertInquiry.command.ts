import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { InsertInquiryRequestDto } from '../../dto/request/InsertInquiryRequest.dto';
import { Inquiry, InquiryDocument } from 'src/schema/inquiry.schema';
import { City } from 'src/schema/city.schema';
import { ShareCity } from 'src/modules/location/dto/share';
import { LocationShareHandler } from 'src/modules/location/handlers/share';

export class InsertInquiryCommand {
  constructor(public readonly dto: InsertInquiryRequestDto) {}
}
@CommandHandler(InsertInquiryCommand)
export class InsertInquiryHandler
  implements ICommandHandler<InsertInquiryCommand>
{
  constructor(
    @InjectModel(Inquiry.name)
    private readonly inquiry: Model<InquiryDocument>,
  ) {}
  async execute(command: InsertInquiryCommand): Promise<any> {
    const { dto } = command;

    //save inquiry
    const inquiry = await new this.inquiry({
      ...dto,
    }).save();

    if (!inquiry?._id) throw new InsertException();

    return Response.inserted();
  }
}
