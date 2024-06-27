import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { UpsertTeamRequestDto } from './dto/request/UpsertTeamRequest.dto';
import { InsertTeamCommand } from './handlers/commands/InsertTeam.command';
import { UpdateTeamCommand } from './handlers/commands/UpdateTeam.command';
import { GetTeamsResponseDto } from './dto/response/GetTeamsResponse.dto';
import { GetTeamsQuery } from './handlers/queries/GetTeams.query';

@ApiTags('team')
@Controller('team')
export class TeamController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil insert team',
    type: ActionDto,
  })
  insert(@Body() dto: UpsertTeamRequestDto) {
    return this.commandBus.execute(new InsertTeamCommand(dto));
  }

  @Put(':id')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil update team',
    type: ActionDto,
  })
  update(@Body() dto: UpsertTeamRequestDto, @Param('id') id: string) {
    return this.commandBus.execute(new UpdateTeamCommand(dto, id));
  }

  @Get()
  @ApiOkResponse({
    description: 'this route wil return teams',
    type: GetTeamsResponseDto,
  })
  sellers() {
    return this.queryBus.execute(new GetTeamsQuery());
  }
}
