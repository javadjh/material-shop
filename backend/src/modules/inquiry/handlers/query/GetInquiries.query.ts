import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetInquiryResponseData } from '../../dto/response/GetInquiryResponse.dto';
import { Inquiry, InquiryDocument } from 'src/schema/inquiry.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';

export class GetInquiriesQuery {
  constructor(public readonly filter: PagingDto) {}
}
@QueryHandler(GetInquiriesQuery)
export class GetInquiriesHandler implements IQueryHandler<GetInquiriesQuery> {
  constructor(
    @InjectModel(Inquiry.name)
    private readonly inquiry: Model<InquiryDocument>,
  ) {}
  async execute(query: GetInquiriesQuery): Promise<any> {
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query?.filter);

    const inqueiries: Array<Inquiry> = await this.inquiry
      .find()
      .skip(skip)
      .limit(eachPerPage)
      .sort({ createdAt: -1 })
      .select(
        `fullName
         phoneNumber
         file
         createdAt
         items`,
      )
      .lean();

    const total: number = await this.inquiry.find().count();

    inqueiries?.map((item) => {
      item.createdAt = item?.createdAt?.toJalali();
    });

    let response: GetInquiryResponseData = { total, list: inqueiries };
    return Response.send(response);
  }
}
