import { Module } from '@nestjs/common';
import { ProvideMaterialController } from './inquiry.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import { LocationModule } from '../location/location.module';
import { HttpModule } from '@nestjs/axios';
import handlers from './handlers';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';

@Module({
  controllers: [ProvideMaterialController],
  imports: [
    CqrsModule,
    ...schema,
    JwtModule.register({}),
    LocationModule,
    HttpModule,
  ],
  providers: [...handlers, AdmminJwtStrategy, JwtStrategy],
})
export class ProvideMaterialModule {}
