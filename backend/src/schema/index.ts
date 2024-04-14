import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { Province, ProvinceSchema } from './province.schema';
import { City, CitySchema } from './city.schema';
import { AppSetting, AppSettingSchema } from './app-setting.schema';
import { File, FileSchema } from './file.schema';
import { Category, CategorySchema } from './category.schema';
import { Seller, SellerSchema } from './seller.schema';

export default [
  MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  MongooseModule.forFeature([{ name: Province.name, schema: ProvinceSchema }]),
  MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  MongooseModule.forFeature([{ name: Seller.name, schema: SellerSchema }]),

  MongooseModule.forFeature([
    { name: AppSetting.name, schema: AppSettingSchema },
  ]),
];
