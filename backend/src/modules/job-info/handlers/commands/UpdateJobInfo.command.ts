import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpsertJobInfoRequestDto } from '../../dto/request/UpsertJobInfoRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { JobInfo, JobInfoDocument } from 'src/schema/job-info.schema';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { NotFoundException } from '@nestjs/common';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';

export class UpdateJobInfoCommand {
  constructor(
    public readonly dto: UpsertJobInfoRequestDto,
    public readonly department: string,
  ) {}
}
@CommandHandler(UpdateJobInfoCommand)
export class UpdateJobInfoHandler
  implements ICommandHandler<UpdateJobInfoCommand>
{
  constructor(
    @InjectModel(JobInfo.name)
    private readonly jobInfo: Model<JobInfoDocument>,
  ) {}
  async execute(command: UpdateJobInfoCommand): Promise<any> {
    const { dto, department } = command;

    //check is jon info found or not
    let jobInfoObject = await this.jobInfo.findOne({ department });
    if (!jobInfoObject?._id) throw new NotFoundException();

    //save jobInfo
    const jobInfo = await this.jobInfo.findOneAndUpdate(
      { department },
      {
        $set: {
          ...dto,
        },
      },
    );

    if (!jobInfo?._id) throw new RecordNotFoundException();

    return Response.updated();
  }
}
