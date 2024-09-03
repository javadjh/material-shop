import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationModule } from './modules/location/location.module';

import { CacheModule } from '@nestjs/cache-manager';
import { FileModule } from './modules/file/file.module';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { SellerModule } from './modules/seller/seller.module';
import { JobInfoModule } from './modules/job-info/job-info.module';
import { JobModule } from './modules/job/job.module';
import { BrandModule } from './modules/brand/brand.module';
import { ReportModule } from './modules/report/report.module';
import { ProductModule } from './modules/product/product.module';
import { AppSettingModule } from './modules/app-setting/app-setting.module';
import { TeamModule } from './modules/team/team.module';
import { EmploymentModule } from './modules/employment/employment.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRoot('mongodb://127.0.0.1:27017/material'),

    CacheModule.register({
      host: '127.0.0.1',
      port: 6379,
      isGlobal: true,
    }),
    LocationModule,
    CategoryModule,
    AppSettingModule,
    UserModule,
    FileModule,
    SellerModule,
    JobInfoModule,
    JobModule,
    BrandModule,
    ReportModule,
    ProductModule,
    TeamModule,
    EmploymentModule,
    ChatModule,
  ],
})
export class AppModule {}
