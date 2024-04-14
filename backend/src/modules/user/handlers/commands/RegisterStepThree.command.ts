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
import { RegisterStepThreeRequestDto } from '../../dto/request/RegisterStepThreeRequest.dto';
import { RecordNotFoundException } from 'src/filters/record-not-found.filter';
import { InsertException } from 'src/filters/insertException.filter';
import { Password } from 'src/utility/password';
import { AccessDeniedException } from 'src/filters/access-denied-repeated.filter';
import { City } from 'src/schema/city.schema';
import { Province } from 'src/schema/province.schema';
import { LocationShareHandler } from 'src/modules/location/handlers/share';

export class InsertUserStepThreeCommand {
  constructor(
    public readonly userRequest: User,
    public readonly dto: RegisterStepThreeRequestDto,
  ) {}
}
@CommandHandler(InsertUserStepThreeCommand)
export class InsertUserStepThreeHandler
  implements ICommandHandler<InsertUserStepThreeCommand>
{
  constructor(
    @InjectModel(User.name)
    private readonly user: Model<UserDocument>,
    private readonly location: LocationShareHandler,
  ) {}
  async execute(command: InsertUserStepThreeCommand): Promise<any> {
    const { dto, userRequest } = command;

    //check is user confirmed if the user confirmed before , user can't use this handler
    if (userRequest?.isCompleted) throw new AccessDeniedException();

    let city: City = userRequest.city;
    let province: Province = userRequest.province;
    //get city if sent
    if (dto.city) {
      //get province
      const location = await this.location.returnlocationFromCityId(dto.city);
      city = location.city;
      province = location.province;
    }

    //find user and update information
    const userObject: User = await this.user.findByIdAndUpdate(
      userRequest._id,
      {
        $set: {
          ...dto,
          ...{
            isCompleted: true,
            city,
            province,
          },
        },
      },
    );

    if (!userObject?._id) throw new RecordNotFoundException();

    return Response.updated();
  }
}
