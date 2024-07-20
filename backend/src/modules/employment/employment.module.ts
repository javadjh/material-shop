import { Module } from '@nestjs/common';
import { EmploymentController } from './employment.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import handlers from './handlers';

@Module({
  controllers: [EmploymentController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, AdmminJwtStrategy, JwtStrategy],
})
export class EmploymentModule {}
