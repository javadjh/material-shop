import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { Chat, ChatDocument } from 'src/schema/chat.schema';
import { User } from 'src/schema/user.schema';
import { GetUsersUnseenChatResponseData } from '../../dto/response/GetUsersUnseenChatResponse.dto';

export class GetUsersUnseenChatQuery {
  constructor(public readonly user: User) {}
}

@QueryHandler(GetUsersUnseenChatQuery)
export class GetUsersUnseenChatHandler
  implements IQueryHandler<GetUsersUnseenChatQuery>
{
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<ChatDocument>,
  ) {}
  async execute(query: GetUsersUnseenChatQuery): Promise<any> {
    const count: number = await this.chatModel
      .find({
        isUserSeen: false,
        user: query?.user?._id,
        isAdmin: true,
      })
      .count();

    let res: GetUsersUnseenChatResponseData = { count };
    return Response.send(res);
  }
}
