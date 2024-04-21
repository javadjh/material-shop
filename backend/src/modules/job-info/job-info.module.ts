import { Module } from '@nestjs/common';
import { JobInfoController } from './job-info.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  controllers: [JobInfoController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, AdmminJwtStrategy, JwtStrategy],
})
export class JobInfoModule {}
