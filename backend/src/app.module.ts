import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LocationModule } from './modules/location/location.module';
import { AppSettingModule } from './modules/app-setting/app-setting.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { CacheModule } from '@nestjs/cache-manager';
import { FileModule } from './modules/file/file.module';

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
    AppSettingModule,
    FileModule,
    
  ],
})
export class AppModule {}
