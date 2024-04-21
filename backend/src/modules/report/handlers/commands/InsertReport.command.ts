import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { InsertReportRequestDto } from '../../dto/request/InsertReportRequest.dto';
import { Report, ReportDocument } from 'src/schema/report.schema';

export class InsertReportCommand {
  constructor(public readonly dto: InsertReportRequestDto) {}
}
@CommandHandler(InsertReportCommand)
export class InsertReportHandler
  implements ICommandHandler<InsertReportCommand>
{
  constructor(
    @InjectModel(Report.name)
    private readonly report: Model<ReportDocument>,
  ) {}
  async execute(command: InsertReportCommand): Promise<any> {
    const { dto } = command;

    //save report
    const report = await new this.report(dto).save();

    if (!report?._id) throw new InsertException();

    return Response.inserted();
  }
}
