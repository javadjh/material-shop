import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import handlers from './handlers';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';

@Module({
  controllers: [SmsController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, JwtStrategy, AdminJwtGuard],
})
export class SmsModule {}
