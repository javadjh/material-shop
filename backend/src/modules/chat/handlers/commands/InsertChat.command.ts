import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InsertChatRequestDto } from '../../dto/request/InsertChatRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Chat, ChatDocument } from 'src/schema/chat.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schema/user.schema';
import { AccessDeniedException } from 'src/filters/access-denied-repeated.filter';
import { InsertException } from 'src/filters/insertException.filter';
import { Response } from 'src/config/response';

export class InsertChatCommand {
  constructor(public readonly dto: InsertChatRequestDto, public user: User) {}
}
@CommandHandler(InsertChatCommand)
export class InsertChatHandler implements ICommandHandler<InsertChatCommand> {
  constructor(
    @InjectModel(Chat.name)
    private readonly chatModel: Model<ChatDocument>,

    @InjectModel(User.name)
    private readonly userModel: Model<UserDocument>,
  ) {}
  async execute(command: InsertChatCommand): Promise<any> {
    let { dto, user } = command;

    //is admin validatio
    if (dto?.isAdmin && !user?.isAdmin) throw new AccessDeniedException();

    let newChat = await new this.chatModel({
      ...dto,
      ...{
        user: user._id,
        isUserSeen: false,
        admin: dto?.isAdmin ? user._id : undefined,
      },
    }).save();

    //update last chat date
    await this.userModel.findByIdAndUpdate(user?._id, {
      $set: {
        lastChatDate: Date.now(),
      },
    });

    if (!newChat?._id) throw new InsertException();

    return Response.inserted();
  }
}
