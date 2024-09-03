import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Chat, ChatDocument } from 'src/schema/chat.schema';
import { User, UserDocument } from 'src/schema/user.schema';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { GetUsersChatsResponseDto } from '../../dto/response/GetUsersChatsResponse.dto';

export class GetAdminUserChatsQuery {
  constructor(
    public readonly filter: PagingDto,
    public readonly userId: string,
  ) {}
}

@QueryHandler(GetAdminUserChatsQuery)
export class GetAdminUserChatsHandler
  implements IQueryHandler<GetAdminUserChatsQuery>
{
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<ChatDocument>,

    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}
  async execute(query: GetAdminUserChatsQuery): Promise<any> {
    console.log(query);

    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query.filter);
    let user = await this.userModel.findById(query?.userId);
    let filter: any = {
      user: user?._id,
    };
    const chats: Array<Chat> = await this?.chatModel
      .find(filter)
      .select(`isAdmin message createdAt`)
      .skip(skip)
      .sort({ createdAt: -1 })
      .limit(eachPerPage);

    const total: number = await this?.chatModel.find(filter).count();

    let res: GetUsersChatsResponseDto = {
      data: { total, list: chats },
    };

    return Response.send(res.data);
  }
}
