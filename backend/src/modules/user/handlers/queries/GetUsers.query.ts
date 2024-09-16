import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { GetUsersResponseData } from '../../dto/response/GetUsersResponse.dto';
import { Response } from 'src/config/response';

export class GetUsersQuery {
  constructor(public readonly paging: PagingDto) {}
}

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<UserDocument>,
  ) {}
  async execute(query: GetUsersQuery): Promise<any> {
    const { eachPerPage, skip, regex } = GlobalUtility.pagingWrapper(
      query.paging,
    );

    let filter: any = {
      $or: [
        { title: regex },
        { email: regex },
        { firstName: regex },
        { lastName: regex },
        { melliCode: regex },
        { 'city.name': regex },
        { 'province.name': regex },
        { address: regex },
        { phone: regex },
        { postalCode: regex },
        { companyName: regex },
      ],
    };

    const users: Array<User> = await this.user
      .find(filter)
      .select(
        `email
         firstName
         lastName
         melliCode
         city
         province
         address
         phone
         postalCode
         companyName
         isAdmin
         isCompleted
         lastChatDate
         createdAt
         updatedAt`,
      )
      .limit(eachPerPage)
      .skip(skip)
      .sort({ createdAt: -1 })
      .lean();

    const total: number = await this.user.find(filter).count();

    users?.map((user: User) => {
      user.createdAt = user.createdAt?.toJalali();
      user.updatedAt = user.updatedAt?.toJalali();
    });

    let res: GetUsersResponseData = { list: users, total };

    return Response.send(res);
  }
}
