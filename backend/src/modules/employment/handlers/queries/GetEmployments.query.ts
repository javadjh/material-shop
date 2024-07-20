import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { Employment, EmploymentDocument } from 'src/schema/employment.schema';
import { GetEmploymentsResponseData } from '../../dto/response/GetEmploymentsResponse.dto';

export class GetEmploymentsQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetEmploymentsQuery)
export class GetEmploymentsHandler
  implements IQueryHandler<GetEmploymentsQuery>
{
  constructor(
    @InjectModel(Employment.name)
    private readonly employment: Model<EmploymentDocument>,
  ) {}
  async execute(query: GetEmploymentsQuery): Promise<any> {
    const { skip, eachPerPage, regex } = GlobalUtility.pagingWrapper(
      query.filter,
    );
    let filter = {
      $or: [
        { fullName: regex },
        { phoneNumber: regex },
        { description: regex },
        { activity: regex },
      ],
    };
    const employments = await this.employment
      .find(filter)
      .select(
        ` fullName
          phoneNumber
          cityId
          description
          activity`,
      )
      .skip(skip)
      .limit(eachPerPage)
      .lean();

    const total = await this.employment.find(filter).count();

    let response: GetEmploymentsResponseData = { employments, total };
    return Response.send(response);
  }
}
