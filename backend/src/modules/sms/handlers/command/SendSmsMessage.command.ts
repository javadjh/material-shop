import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sms } from 'src/config/Sms';
import { Seller } from 'src/schema/seller.schema';
import { SmsDocument } from 'src/schema/sms.schema';
import { SendSmsMessageRequestDto } from '../../dto/request/SendSmsMessageRequest.dto';
import axios from 'axios';
import { User, UserDocument } from 'src/schema/user.schema';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import { Response } from 'src/config/response';

export class SendSmsMessageCommand {
  constructor(public readonly dto: SendSmsMessageRequestDto) {}
}
@CommandHandler(SendSmsMessageCommand)
export class SendSmsMessageHandler
  implements ICommandHandler<SendSmsMessageCommand>
{
  constructor(
    @InjectModel(Sms.name)
    private readonly sms: Model<SmsDocument>,

    @InjectModel(User.name)
    private readonly user: Model<UserDocument>,
  ) {}
  async execute(command: SendSmsMessageCommand): Promise<any> {
    const { dto } = command;
    dto?.userId?.isObjectId();

    const user: User = await this.user.findById(dto?.userId);
    if (!user?._id) throw new RecordNotFoundException();

    //send sms logic

    await axios.post('http://ippanel.com/api/select', {
      op: 'send',
      uname: 'u9122855499',
      pass: 'Med@0480301840',
      from: '+983000505',
      to: [user?.phone],
      message: dto?.message,
    });

    await new this.sms({
      user: user?._id,
      message: dto?.message,
    }).save();

    return Response.inserted();
  }
}
