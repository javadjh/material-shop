import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertJobInfoRequestDto } from '../../dto/request/UpsertJobInfoRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { JobInfo, JobInfoDocument } from 'src/schema/job-info.schema';
import { Model } from 'mongoose';
import { RecordRepeatedException } from 'src/filters/record-repeated.filter';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';

export class DeleteJobInfoCommand {
  constructor(public readonly department: string) {}
}
@CommandHandler(DeleteJobInfoCommand)
export class DeleteJobInfoHandler
  implements ICommandHandler<DeleteJobInfoCommand>
{
  constructor(
    @InjectModel(JobInfo.name)
    private readonly jobInfo: Model<JobInfoDocument>,
  ) {}
  async execute(command: DeleteJobInfoCommand): Promise<any> {
    const { department } = command;

    await this.jobInfo.findOneAndRemove({ department });

    return Response.deleted();
  }
}
