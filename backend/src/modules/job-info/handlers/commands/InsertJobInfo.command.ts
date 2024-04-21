import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertJobInfoRequestDto } from '../../dto/request/UpsertJobInfoRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { JobInfo, JobInfoDocument } from 'src/schema/job-info.schema';
import { Model } from 'mongoose';
import { RecordRepeatedException } from 'src/filters/record-repeated.filter';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';

export class InsertJobInfoCommand {
  constructor(public readonly dto: UpsertJobInfoRequestDto) {}
}
@CommandHandler(InsertJobInfoCommand)
export class InsertJobInfoHandler
  implements ICommandHandler<InsertJobInfoCommand>
{
  constructor(
    @InjectModel(JobInfo.name)
    private readonly jobInfo: Model<JobInfoDocument>,
  ) {}
  async execute(command: InsertJobInfoCommand): Promise<any> {
    const { dto } = command;

    //check is deparrtment repeated or not
    let jobDepartment = await this.jobInfo.findOne({
      department: dto.department,
    });

    if (jobDepartment?._id) throw new RecordRepeatedException();

    //save jobInfo
    const jobInfo = await new this.jobInfo(dto).save();

    if (!jobInfo?._id) throw new InsertException();

    return Response.inserted();
  }
}
