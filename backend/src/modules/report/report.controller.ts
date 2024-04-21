import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertReportRequestDto } from './dto/request/InsertReportRequest.dto';
import { InsertReportCommand } from './handlers/commands/InsertReport.command';
import { GetReportsResponseDto } from './dto/response/GetReportsResponse.dto';
import { GetReportsQuery } from './handlers/queries/GetReports.query';
import { PagingDto } from 'src/shareDTO/Paging.dto';

@Controller('report')
@ApiTags('report')
export class ReportController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOkResponse({
    description: 'this route wil insert report',
    type: ActionDto,
  })
  insert(@Body() dto: InsertReportRequestDto) {
    return this.commandBus.execute(new InsertReportCommand(dto));
  }

  @Get('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil return  report ',
    type: GetReportsResponseDto,
  })
  jonInfoDepartments(@Query() filter: PagingDto) {
    return this.queryBus.execute(new GetReportsQuery(filter));
  }
}
