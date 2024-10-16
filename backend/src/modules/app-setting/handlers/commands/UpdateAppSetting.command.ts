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
    const {
      instagram,
      twitter,
      whatsapp,
      pinterest,
      linkedin,
      telegram,
      youtube,
      bazazr,
      myket,
      link,
      sibche,
      sibapp,
      webapp,
      banner,
      bannerLink,
      firstAddress,
      secondAddress,
      thirdAddress,
      firstTell,
      secondTell,
      thirdTell,
      location,
    } = command.dto;
    let appSetting: any = await this.appSettingModel.findOne();
    if (!appSetting?._id)
      appSetting = new this.appSettingModel({
        instagram,
        twitter,
        whatsapp,
        pinterest,
        linkedin,
        telegram,
        youtube,
        bazazr,
        myket,
        link,
        sibche,
        bannerLink,
        sibapp,
        webapp,
        banner,
        firstAddress,
        secondAddress,
        thirdAddress,
        firstTell,
        secondTell,
        thirdTell,
      });

    appSetting.instagram = instagram;
    appSetting.twitter = twitter;
    appSetting.whatsapp = whatsapp;
    appSetting.pinterest = pinterest;
    appSetting.linkedin = linkedin;
    appSetting.telegram = telegram;
    appSetting.youtube = youtube;
    appSetting.bazazr = bazazr;
    appSetting.myket = myket;
    appSetting.link = link;
    appSetting.sibche = sibche;
    appSetting.sibapp = sibapp;
    appSetting.webapp = webapp;
    appSetting.banner = banner;
    appSetting.bannerLink = bannerLink;
    appSetting.location = location;

    appSetting.firstAddress = firstAddress;
    appSetting.secondAddress = secondAddress;
    appSetting.thirdAddress = thirdAddress;
    appSetting.firstTell = firstTell;
    appSetting.secondTell = secondTell;
    appSetting.thirdTell = thirdTell;

    await appSetting.save();

    return Response.updated();
  }
}
