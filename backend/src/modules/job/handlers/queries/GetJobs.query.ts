import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Job, JobDocument } from 'src/schema/job.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import {
  GetJobsResponseData,
  GetJobsResponseDto,
} from '../../dto/response/GetJobsResponse.dto';

export class GetJobsQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetJobsQuery)
export class GetJobsHandler implements IQueryHandler<GetJobsQuery> {
  constructor(
    @InjectModel(Job.name)
    private readonly job: Model<JobDocument>,
  ) {}
  async execute(query: GetJobsQuery): Promise<any> {
    const { skip, eachPerPage, regex } = GlobalUtility.pagingWrapper(
      query.filter,
    );

    let filter: any = {
      $or: [
        { department: regex },
        { fullName: regex },
        { mellicode: regex },
        { fatherName: regex },
        { address: regex },
        { firstNumber: regex },
        { secondNumber: regex },
        { degree: regex },
        { universityName: regex },
        { jobHistory: regex },
        { LastCompanyName: regex },
        { LastCompanyTel: regex },
        { description: regex },
      ],
    };
    const jobs = await this.job
      .find(filter)
      .select(
        ` department
          fullName
          mellicode
          fatherName
          age
          bithday
          isMarried
          address
          firstNumber
          secondNumber
          degree
          universityName
          jobHistory
          LastCompanyName
          LastCompanyTel
          resume
          description`,
      )
      .skip(skip)
      .limit(eachPerPage)
      .lean();

    const total: number = await this.job.find(filter).count();

    let response: GetJobsResponseData = { jobs, total };
    return Response.send(response);
  }
}
