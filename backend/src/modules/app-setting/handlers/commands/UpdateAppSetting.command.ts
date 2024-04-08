import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UpdateAppSettingRequestDto } from '../../dto/request/UpdateAppSettingRequest.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AppSetting, AppSettingDocument } from 'src/schema/app-setting.schema';
import { Model } from 'mongoose';
import { Seed } from 'src/config/seed';
import { Response } from 'src/config/response';

export class UpdateAppSettingCommand {
  constructor(public readonly dto: UpdateAppSettingRequestDto) {}
}
@CommandHandler(UpdateAppSettingCommand)
export class UpdateAppSettingHandler
  implements ICommandHandler<UpdateAppSettingCommand>
{
  constructor(
    @InjectModel(AppSetting.name)
    private readonly appSettingModel: Model<AppSettingDocument>,
    private readonly seed: Seed,
  ) {}
  async execute(command: UpdateAppSettingCommand): Promise<any> {
    const { contract } = command.dto;
    let appSetting: any = await this.appSettingModel.findOne();
    if (!appSetting?._id) appSetting = new this.appSettingModel({ contract });

    appSetting.contract = contract;

    await appSetting.save();

    return Response.updated();
  }
}
