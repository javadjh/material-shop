import { Module } from '@nestjs/common';
import schema from 'src/schema';
import { LocationController } from './location.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { Seed } from 'src/config/seed';
import { LocationShareHandler } from './handlers/share';

@Module({
  controllers: [LocationController],
  imports: [CqrsModule, ...schema, JwtModule.register({})],
  providers: [...handlers, JwtStrategy, Seed, LocationShareHandler],
  exports: [LocationShareHandler],
})
export class LocationModule {}
