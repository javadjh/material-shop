import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';

import { Seller, SellerDocument } from 'src/schema/seller.schema';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { GetSellersResponseDto } from '../../dto/response/GetSellersResponse.dto';
import { GetSellersRequestDto } from '../../dto/request/GetSellersRequest.dto';

export class GetSellersQuery {
  constructor(public readonly filter: GetSellersRequestDto) {}
}
@QueryHandler(GetSellersQuery)
export class GetSellersHandler implements IQueryHandler<GetSellersQuery> {
  constructor(
    @InjectModel(Seller.name)
    private readonly seller: Model<SellerDocument>,
  ) {}
  async execute(query: GetSellersQuery): Promise<any> {
    const { eachPerPage, skip, regex } = GlobalUtility.pagingWrapper(
      query.filter,
    );
    let sellerDepartment = query.filter.sellerDepartment;

    let filter: any = {
      $or: [
        { firstNumber: regex },
        { secondNumber: regex },
        { title: regex },
        { 'city.name': regex },
        { 'province.name': regex },
        { address: regex },
        { website: regex },
        { instagram: regex },
        { telegram: regex },
      ],
    };
    console.log(sellerDepartment);
    console.log(query);

    if (sellerDepartment) {
      filter = { ...filter, ...{ sellerDepartment } };
    }
    let sellers: Array<Seller> = await this.seller
      .find(filter)

      .limit(eachPerPage)
      .skip(skip)
      .select(
        `firstNumber
         secondNumber
         title
         city
         province
         address
         website
         instagram
         telegram
         sellerDepartment`,
      )
      .lean();

    sellers.map((item) => {
      item.provinceName = item.province.name;
      item.cityName = item.city.name;
      delete item.province;
      delete item.city;
    });

    let response: GetSellersResponseDto = { data: sellers };

    return Response.send(response?.data);
  }
}
