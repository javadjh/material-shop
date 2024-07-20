import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { Employment, EmploymentDocument } from 'src/schema/employment.schema';
import { InsertEmploymentRequestDto } from '../../dto/request/InsertEmploymentRequest.dto';

export class InsertEmploymentCommand {
  constructor(public readonly dto: InsertEmploymentRequestDto) {}
}
@CommandHandler(InsertEmploymentCommand)
export class InsertEmploymentHandler
  implements ICommandHandler<InsertEmploymentCommand>
{
  constructor(
    @InjectModel(Employment.name)
    private readonly employment: Model<EmploymentDocument>,
  ) {}
  async execute(command: InsertEmploymentCommand): Promise<any> {
    const { dto } = command;

    //save employment
    const employment = await new this.employment(dto).save();

    if (!employment?._id) throw new InsertException();

    return Response.inserted();
  }
}
