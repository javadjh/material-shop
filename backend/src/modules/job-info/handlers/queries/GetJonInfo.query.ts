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
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import {
  GetJobInfoResponseData,
  GetJobInfoResponseDto,
} from '../../dto/response/GetJobInfoResponse.dto';

export class GetJobInfoQuery {
  constructor(public readonly department: string) {}
}
@QueryHandler(GetJobInfoQuery)
export class GetJobInfoHandler implements IQueryHandler<GetJobInfoQuery> {
  constructor(
    @InjectModel(JobInfo.name)
    private readonly jobInfo: Model<JobInfoDocument>,
  ) {}
  async execute(query: GetJobInfoQuery): Promise<any> {
    const jobInfo: JobInfo = await this.jobInfo
      .findOne({ department: query.department })
      .select(
        ` department
          remainingEmployeeCount
          gender
          city
          location
          ageRange
          minDegree
          requiredDegree
          jobHistory
          clock
          salary
          mission
          description`,
      );

    if (!jobInfo?._id) throw new RecordNotFoundException();

    let response: GetJobInfoResponseDto = { data: jobInfo };

    return Response.send(response.data);
  }
}
