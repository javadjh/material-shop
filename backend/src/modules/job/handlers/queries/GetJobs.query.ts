import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Job, JobDocument } from 'src/schema/job.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetJobsResponseDto } from '../../dto/response/GetJobsResponse.dto';

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
    const jobs = await this.job
      .find({
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
      })
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

    let response: GetJobsResponseDto = { data: jobs };
    return Response.send(response.data);
  }
}
