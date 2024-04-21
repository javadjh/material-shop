import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertJobRequestDto } from './dto/request/InsertJobRequest.dto';
import { InsertJobCommand } from './handlers/commands/InsertJobInfo.command';
import { GetJobsResponseDto } from './dto/response/GetJobsResponse.dto';
import { GetJobsQuery } from './handlers/queries/GetJobs.query';
import { PagingDto } from 'src/shareDTO/Paging.dto';

@Controller('job')
@ApiTags('job')
export class JobController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOkResponse({
    description: 'this route wil insert job',
    type: ActionDto,
  })
  insert(@Body() dto: InsertJobRequestDto) {
    return this.commandBus.execute(new InsertJobCommand(dto));
  }

  @Get('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil return  job ',
    type: GetJobsResponseDto,
  })
  jonInfoDepartments(@Query() filter: PagingDto) {
    return this.queryBus.execute(new GetJobsQuery(filter));
  }
}
