import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { CqrsModule } from '@nestjs/cqrs';
import handlers from './handlers';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';

@Module({
  controllers: [TeamController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, JwtStrategy, AdminJwtGuard],
})
export class TeamModule {}
