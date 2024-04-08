import { Module } from '@nestjs/common';
import { AppSettingController } from './app-setting.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { Seed } from 'src/config/seed';

@Module({
  controllers: [AppSettingController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, JwtStrategy, Seed],
})
export class AppSettingModule {}
