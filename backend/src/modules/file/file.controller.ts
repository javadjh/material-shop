import {
  Controller,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { InsertFileResponseDto } from './dto/response/InsertFileResponse.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from 'src/config/fileConfig';
import { InsertFileCommand } from './handlers/commands/InsertFile.command';
import { LoginJwtGuard } from 'src/guards/login-jwt.guard';

@Controller('file')
@ApiTags('file')
export class FileController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  @ApiConsumes('multipart/form-data')
  @UseGuards(LoginJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'insert file api',
    type: InsertFileResponseDto,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  insert(
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    return this.commandBus.execute(new InsertFileCommand(file));
  }
}
