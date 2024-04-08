import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { Province, ProvinceSchema } from './province.schema';
import { City, CitySchema } from './city.schema';
import { AppSetting, AppSettingSchema } from './app-setting.schema';
import { File, FileSchema } from './file.schema';


export default [
  MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  MongooseModule.forFeature([{ name: Province.name, schema: ProvinceSchema }]),
  MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  
  
  MongooseModule.forFeature([
    { name: AppSetting.name, schema: AppSettingSchema },
  ]),
];
