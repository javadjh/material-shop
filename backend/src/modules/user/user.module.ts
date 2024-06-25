import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { Seed } from 'src/config/seed';
import { UserController } from './user.controller';
import { Auth } from 'src/config/Auth';
import { LocationModule } from '../location/location.module';
import { Sms } from 'src/config/Sms';

@Module({
  controllers: [UserController],
  imports: [CqrsModule, ...schema, JwtModule.register({}), LocationModule],
  providers: [...handlers, JwtStrategy, Seed, Auth, Sms],
})
export class UserModule {}
