import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { RegisterStepOneRequestDto } from '../../dto/request/RegisterStepOneRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AppSetting, AppSettingDocument } from 'src/schema/app-setting.schema';
import { Model } from 'mongoose';
import { Response } from 'src/config/response';
import { User, UserDocument } from 'src/schema/user.schema';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Inject } from '@nestjs/common';
import { GlobalUtility } from 'src/utility/GlobalUtility';
import { ConfigService } from '@nestjs/config';
import { RecordRepeatedException } from 'src/filters/record-repeated.filter';

export class InsertUserStepOneCommand {
  constructor(public readonly dto: RegisterStepOneRequestDto) {}
}
@CommandHandler(InsertUserStepOneCommand)
export class InsertUserStepOneHandler
  implements ICommandHandler<InsertUserStepOneCommand>
{
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<UserDocument>,

    private config: ConfigService,

    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}
  async execute(command: InsertUserStepOneCommand): Promise<any> {
    const { phone } = command.dto;

    //check is phone number repeated
    const userFound: number = await this.user.find({ phone }).count();
    if (userFound >= 1) throw new RecordRepeatedException();

    //generate code
    const code = GlobalUtility.randomIntFromInterval(1000, 9999);

    console.log(code);

    //save into redis memory
    const key: string = `${phone}`;
    await this.cacheManager.set(key, code, 1000000);
    console.log({ key, code });

    return Response.sent();
  }
}
