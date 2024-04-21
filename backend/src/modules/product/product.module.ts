import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import handlers from './handlers';
import { BrandModule } from '../brand/brand.module';
import { CategoryModule } from '../category/category.module';

@Module({
  controllers: [ProductController],
  imports: [
    CqrsModule,
    ...schema,
    JwtModule.register({}),
    BrandModule,
    CategoryModule,
  ],
  providers: [...handlers, AdmminJwtStrategy, JwtStrategy],
})
export class ProductModule {}
