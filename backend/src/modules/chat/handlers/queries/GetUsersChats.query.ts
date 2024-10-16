import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Chat, ChatDocument } from 'src/schema/chat.schema';
import { User } from 'src/schema/user.schema';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { GetUsersChatsResponseDto } from '../../dto/response/GetUsersChatsResponse.dto';

export class GetUsersChatsQuery {
  constructor(public readonly filter: PagingDto, public readonly user: User) {}
}

@QueryHandler(GetUsersChatsQuery)
export class GetUsersChatsHandler implements IQueryHandler<GetUsersChatsQuery> {
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<ChatDocument>,
  ) {}
  async execute(query: GetUsersChatsQuery): Promise<any> {
    const { skip, eachPerPage } = GlobalUtility.pagingWrapper(query.filter);

    //seen all
    await this.chatModel.updateMany(
      {
        user: query?.user?._id,
        isAdmin: true,
        isUserSeen: false,
      },
      {
        isUserSeen: true,
      },
    );
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    let filter: any = {
      user: query?.user?._id,
      createdAt: {
        $gte: sevenDaysAgo,
      },
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
