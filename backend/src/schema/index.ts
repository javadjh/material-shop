import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { Province, ProvinceSchema } from './province.schema';
import { City, CitySchema } from './city.schema';
import { AppSetting, AppSettingSchema } from './app-setting.schema';
import { File, FileSchema } from './file.schema';
import { Category, CategorySchema } from './category.schema';
import { Seller, SellerSchema } from './seller.schema';
import { JobInfo, JobInfoSchema } from './job-info.schema';
import { Job, JobSchema } from './job.schema';
import { Brand, BrandSchema } from './barnd.schema';
import { Report, ReportSchema } from './report.schema';
import { Product, ProductSchema } from './product.schema';
import { Team, TeamSchema } from './team.schema';
import { Employment, EmploymentSchema } from './employment.schema';
import { Chat, ChatSchema } from './chat.schema';

export default [
  MongooseModule.forFeature([{ name: File.name, schema: FileSchema }]),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  MongooseModule.forFeature([{ name: Province.name, schema: ProvinceSchema }]),
  MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
  MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }]),
  MongooseModule.forFeature([{ name: Seller.name, schema: SellerSchema }]),
  MongooseModule.forFeature([{ name: JobInfo.name, schema: JobInfoSchema }]),
  MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }]),
  MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
  MongooseModule.forFeature([{ name: Report.name, schema: ReportSchema }]),
  MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
  MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  MongooseModule.forFeature([
    { name: Employment.name, schema: EmploymentSchema },
  ]),

  MongooseModule.forFeature([
    { name: AppSetting.name, schema: AppSettingSchema },
  ]),
];
