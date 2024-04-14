import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { CategoryShareHandler } from './handlers/share';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';

@Module({
  controllers: [CategoryController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [
    ...handlers,
    AdmminJwtStrategy,
    JwtStrategy,
    AdmminJwtStrategy,
    CategoryShareHandler,
  ],
})
export class CategoryModule {}
