import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertInquiryRequestDto } from './dto/request/InsertInquiryRequest.dto';
import { InsertInquiryCommand } from './handlers/command/InsertInquiry.command';
import { GetInquiriesQuery } from './handlers/query/GetInquiries.query';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetInquiryResponseDto } from './dto/response/GetInquiryResponse.dto';

@Controller('inquiry')
@ApiTags('inquiry')
export class InquiryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOkResponse({
    description: 'this route for insert new inquiry',
    type: ActionDto,
  })
  insert(@Body() dto: InsertInquiryRequestDto) {
    return this.commandBus.execute(new InsertInquiryCommand(dto));
  }

  @Get('')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminJwtGuard)
  @ApiOkResponse({
    description: 'this route for return inquiries',
    type: GetInquiryResponseDto,
  })
  inquiries(@Param() filter: PagingDto) {
    return this.queryBus.execute(new GetInquiriesQuery(filter));
  }
}
