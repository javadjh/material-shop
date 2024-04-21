import { Module } from '@nestjs/common';
import { BrandController } from './brand.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { BrandShareHandler } from './handlers/share';

@Module({
  controllers: [BrandController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, AdmminJwtStrategy, JwtStrategy, BrandShareHandler],
  exports: [BrandShareHandler],
})
export class BrandModule {}
