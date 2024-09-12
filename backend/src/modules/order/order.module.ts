import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import { AdmminJwtStrategy } from 'src/strategy/admin-jwt.strategy';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import handler from './handler';

@Module({
  controllers: [OrderController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handler, AdmminJwtStrategy, JwtStrategy],
})
export class OrderModule {}
