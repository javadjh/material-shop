import { Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';

@Module({
  controllers: [JobController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, AdmminJwtStrategy, JwtStrategy],
})
export class JobModule {}
