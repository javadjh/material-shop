import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { SendSmsMessageRequestDto } from './dto/request/SendSmsMessageRequest.dto';
import { SendSmsMessageCommand } from './handlers/command/SendSmsMessage.command';
import { ActionDto } from 'src/shareDTO/action.dto';

@Controller('sms')
@ApiTags('sms')
export class SmsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route will send sms',
    type: ActionDto,
  })
  insert(@Body() dto: SendSmsMessageRequestDto) {
    return this.commandBus.execute(new SendSmsMessageCommand(dto));
  }
}
