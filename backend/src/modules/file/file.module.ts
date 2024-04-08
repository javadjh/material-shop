import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { CqrsModule } from '@nestjs/cqrs';
import schema from 'src/schema';
import { JwtModule } from '@nestjs/jwt';
import handlers from './handlers';
import { JwtStrategy } from 'src/strategy/jwt.strategy';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [FileController],
  imports: [
    ...schema,
    CqrsModule,
    JwtModule.register({}),
    MulterModule.register({
      dest: './files',
    }),
  ],
  providers: [...handlers, JwtStrategy],
})
export class FileModule {}
