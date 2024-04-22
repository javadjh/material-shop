import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Job, JobDocument } from 'src/schema/job.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import {
  GetReportsResponseData,
  GetReportsResponseDto,
} from '../../dto/response/GetReportsResponse.dto';
import { Report, ReportDocument } from 'src/schema/report.schema';

export class GetReportsQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetReportsQuery)
export class GetReportsHandler implements IQueryHandler<GetReportsQuery> {
  constructor(
    @InjectModel(Report.name)
    private readonly report: Model<ReportDocument>,
  ) {}
  async execute(query: GetReportsQuery): Promise<any> {
    const { skip, eachPerPage, regex } = GlobalUtility.pagingWrapper(
      query.filter,
    );
    const reports = await this.report
      .find({
        $or: [
          { fullName: regex },
          { phoneNumber: regex },
          { description: regex },
        ],
      })
      .select(
        ` fullName
          phoneNumber
          description`,
      )
      .skip(skip)
      .limit(eachPerPage)
      .lean();

    const total = await this.report
      .find({
        $or: [
          { fullName: regex },
          { phoneNumber: regex },
          { description: regex },
        ],
      })
      .count();

    let response: GetReportsResponseData = { reports, total };
    return Response.send(response);
  }
}
