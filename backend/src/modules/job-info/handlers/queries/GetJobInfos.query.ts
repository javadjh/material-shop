import {
  CommandHandler,
  ICommandHandler,
  IQueryHandler,
  QueryHandler,
} from '@nestjs/cqrs';
import { UpsertJobInfoRequestDto } from '../../dto/request/UpsertJobInfoRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { JobInfo, JobInfoDocument } from 'src/schema/job-info.schema';
import { Model } from 'mongoose';
import { RecordRepeatedException } from 'src/filters/record-repeated.filter';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';
import { GetJobInfoResponseDto } from '../../dto/response/GetJobInfoResponse.dto';

export class GetJobInfosQuery {}

@QueryHandler(GetJobInfosQuery)
export class GetJobInfosHandler implements IQueryHandler<GetJobInfosQuery> {
  constructor(
    @InjectModel(JobInfo.name)
    private readonly jobInfo: Model<JobInfoDocument>,
  ) {}
  async execute(): Promise<any> {
    const jobInfos = await this.jobInfo.find().lean();

    let response: GetJobInfoResponseDto = {
      data: jobInfos,
    };

    return Response.send(response.data);
  }
}
