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
import { GetJobInfoDepartmentsResponseDto } from '../../dto/response/GetJobInfoDepartmentsResponse.dto';

export class GetJobInfoDepartmentsQuery {
  constructor() {}
}
@QueryHandler(GetJobInfoDepartmentsQuery)
export class GetJobInfoDepartmentsHandler
  implements IQueryHandler<GetJobInfoDepartmentsQuery>
{
  constructor(
    @InjectModel(JobInfo.name)
    private readonly jobInfo: Model<JobInfoDocument>,
  ) {}
  async execute(query: GetJobInfoDepartmentsQuery): Promise<any> {
    const jobInfos = await this.jobInfo.find().select('department').lean();

    let jobInfoDepartments: Array<String> = [];
    jobInfos.forEach((ele) => {
      jobInfoDepartments.push(ele.department);
    });

    let response: GetJobInfoDepartmentsResponseDto = {
      data: jobInfoDepartments,
    };

    return Response.send(response.data);
  }
}
