import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ActionDto } from 'src/shareDTO/action.dto';
import { UpdateAppSettingCommand } from './handlers/commands/UpdateAppSetting.command';
import { UpdateAppSettingRequestDto } from './dto/request/UpdateAppSettingRequest.dto';
import { GetAppSettingResponseDto } from './dto/response/GetAppSettingResponse.dto';
import { GetAppSettingQuery } from './handlers/queries/GetAppSetting.query';
import { JwtGuard } from 'src/guards/jwt.guard';

@Controller('app-setting')
@ApiTags('app-setting')
export class AppSettingController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Put('')
  @UseGuards(JwtGuard)
  @ApiOkResponse({
    description: 'this route can update the app setting Properties',
    type: ActionDto,
  })
  update(@Body() dto: UpdateAppSettingRequestDto) {
    return this.commandBus.execute(new UpdateAppSettingCommand(dto));
  }

  @Get('')
  @ApiOkResponse({
    description: 'this route return the app setting configuration',
    type: GetAppSettingResponseDto,
  })
  appsetting() {
    return this.queryBus.execute(new GetAppSettingQuery());
  }
}
