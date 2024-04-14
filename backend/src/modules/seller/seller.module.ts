import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import { LocationModule } from '../location/location.module';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import handlers from './handlers';

@Module({
  controllers: [SellerController],
  imports: [CqrsModule, ...schema, JwtModule.register({}), LocationModule],
  providers: [...handlers, JwtStrategy, AdminJwtGuard],
})
export class SellerModule {}
