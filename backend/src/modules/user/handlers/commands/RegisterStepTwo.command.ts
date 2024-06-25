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
import { RegisterStepTwoRequestDto } from '../../dto/request/RegisterStepTwoRequest.dto';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import { Auth } from 'src/config/Auth';
import { SendTokenResponseDto } from '../../dto/response/SendTokenResponse.dto';

export class InsertUserStepTwoCommand {
  constructor(public readonly dto: RegisterStepTwoRequestDto) {}
}
@CommandHandler(InsertUserStepTwoCommand)
export class InsertUserStepTwoHandler
  implements ICommandHandler<InsertUserStepTwoCommand>
{
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<UserDocument>,

    private auth: Auth,

    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}
  async execute(command: InsertUserStepTwoCommand): Promise<any> {
    const { phone, code } = command.dto;

    //check is phone number has any valid code
    const userPhone: string | any = await this.cacheManager.get(`${phone}`);

    if (!userPhone || userPhone != code) throw new RecordNotFoundException();

    const userFound: User = await this.user.findOne({
      phone,
    });

    let user: User;
    if (!userFound?._id) {
      //create user
      user = await new this.user({
        phone,
        isAdmin: false,
      }).save();
    }

    //generate token
    let token: string = await this.auth.generateToken({ sub: user?._id });

    let dto: SendTokenResponseDto = { data: token };

    return Response.send(dto);
  }
}
