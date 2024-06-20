import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seed } from 'src/config/seed';
import { AppSetting, AppSettingDocument } from 'src/schema/app-setting.schema';
import { GetAppSettingResponseDto } from '../../dto/response/GetAppSettingResponse.dto';
import { Response } from 'src/config/response';

export class GetAppSettingQuery {}
@QueryHandler(GetAppSettingQuery)
export class GetAppSettingHandler implements IQueryHandler<GetAppSettingQuery> {
  constructor(
    @InjectModel(AppSetting.name)
    private readonly appSettingModel: Model<AppSettingDocument>,
    private readonly seed: Seed,
  ) {}
  async execute(query: GetAppSettingQuery): Promise<any> {
    let appSetting: AppSetting | any = await this.appSettingModel.findOne();

    if (!appSetting?._id)
      appSetting = await new this.appSettingModel(this.seed.appSetting).save();

    appSetting.updatedAt = appSetting.updatedAt.toJalali();

    let res: GetAppSettingResponseDto = { data: appSetting };
    return Response.send(res);
  }
}
