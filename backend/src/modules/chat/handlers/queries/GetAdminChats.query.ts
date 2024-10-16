import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, ChatDocument } from 'src/schema/chat.schema';
import { User, UserDocument } from 'src/schema/user.schema';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import {
  GetAdminChatsResponseData,
  GetAdminChatsResponseDto,
} from '../../dto/response/GetAdminChatsResponse.dto';
import { Response } from 'src/config/response';

export class GetAdminChatsQuery {
  constructor(public readonly filter: PagingDto) {}
}

@QueryHandler(GetAdminChatsQuery)
export class GetAdminChatsHandler implements IQueryHandler<GetAdminChatsQuery> {
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<ChatDocument>,

    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}
  async execute(query: GetAdminChatsQuery): Promise<any> {
    let { skip, eachPerPage } = GlobalUtility.pagingWrapper(query.filter);
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    let users = await this.userModel
      .find({
        isActive: true,
        isAdmin: false,
        createdAt: {
          $gte: sevenDaysAgo,
        },
      })
      .sort({ lastChatDate: -1 })
      .select('firstName lastName phone lastChatDate')
      .limit(eachPerPage)
      .skip(skip)
      .lean();

    let total: number = await this.userModel
      .find({ isActive: true, isAdmin: false })
      .count();

    for (let i = 0; i < users.length; i++) {
      const item = users[i];
      item.lastChatDate = item?.lastChatDate?.toJalali();
      item.lastChat =
        (
          await this.chatModel
            .findOne({ user: item?._id })
            .sort({ createdAt: -1 })
            .select('message')
            .lean()
        )?.message || 'تیکتی وجود ندارد';
    }

    let res: GetAdminChatsResponseData = { total, list: users };

    return Response.send(res);
  }
}
