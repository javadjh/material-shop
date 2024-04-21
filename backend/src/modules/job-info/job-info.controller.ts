import {
  Body,
  Controller,
  Delete,
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
import { UpsertJobInfoRequestDto } from './dto/request/UpsertJobInfoRequest.dto';
import { InsertJobInfoCommand } from './handlers/commands/InsertJobInfo.command';
import { UpdateJobInfoCommand } from './handlers/commands/UpdateJobInfo.command';
import { GetJobInfoDepartmentsResponseDto } from './dto/response/GetJobInfoDepartmentsResponse.dto';
import { GetJobInfoDepartmentsQuery } from './handlers/queries/GetJobInfoDepartments.query';
import { DeleteJobInfoCommand } from './handlers/commands/DeleteJonInfo.command';
import { GetJobInfoResponseDto } from './dto/response/GetJobInfoResponse.dto';
import { GetJobInfoQuery } from './handlers/queries/GetJonInfo.query';

@Controller('job-info')
@ApiTags('job-info')
export class JobInfoController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil insert job info',
    type: ActionDto,
  })
  insert(@Body() dto: UpsertJobInfoRequestDto) {
    return this.commandBus.execute(new InsertJobInfoCommand(dto));
  }

  @Put(':department')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil update job info',
    type: ActionDto,
  })
  update(
    @Body() dto: UpsertJobInfoRequestDto,
    @Param('department') department: string,
  ) {
    return this.commandBus.execute(new UpdateJobInfoCommand(dto, department));
  }

  @Delete(':department')
  @ApiOkResponse({
    description: 'this route wil delete jobInfo',
    type: ActionDto,
  })
  delete(@Param('department') department: string) {
    return this.commandBus.execute(new DeleteJobInfoCommand(department));
  }

  @Get('departments')
  @ApiOkResponse({
    description: 'this route wil return  job info departments',
    type: GetJobInfoDepartmentsResponseDto,
  })
  jonInfoDepartments() {
    return this.queryBus.execute(new GetJobInfoDepartmentsQuery());
  }

  @Get('department/:departmmment')
  @ApiOkResponse({
    description: 'this route wil return  job info departments',
    type: GetJobInfoResponseDto,
  })
  jonInfo(@Param('departmmment') departmmment: string) {
    return this.queryBus.execute(new GetJobInfoQuery(departmmment));
  }
}
