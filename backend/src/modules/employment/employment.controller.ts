import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertEmploymentRequestDto } from './dto/request/InsertEmploymentRequest.dto';
import { InsertEmploymentCommand } from './handlers/commands/InsertEmployment.command';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { GetEmploymentsResponseDto } from './dto/response/GetEmploymentsResponse.dto';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetEmploymentsQuery } from './handlers/queries/GetEmployments.query';

@Controller('employment')
export class EmploymentController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOkResponse({
    description: 'this route wil insert employment',
    type: ActionDto,
  })
  insert(@Body() dto: InsertEmploymentRequestDto) {
    return this.commandBus.execute(new InsertEmploymentCommand(dto));
  }

  @Get('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil return  employment ',
    type: GetEmploymentsResponseDto,
  })
  jonInfoDepartments(@Query() filter: PagingDto) {
    return this.queryBus.execute(new GetEmploymentsQuery(filter));
  }
}
