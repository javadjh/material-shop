import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetProfile } from 'src/decorator/get-profile.decorator';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertPaymentCommand } from './handlers/command/InsertPayment.command';
import { InsertPaymentRequestDto } from './dto/request/InsertPaymentRequest.dto';
import { User } from 'src/schema/user.schema';
import { JwtGuard } from 'src/guards/jwt.guard';
import { GetUsersPaymentsResponseDto } from './dto/response/GetUsersPaymentsResponse.dto';
import { GetUsersPaymentsQuery } from './handlers/query/GetUsersPayments.query';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { GetPaymentsQuery } from './handlers/query/GetPayments.query';

@Controller('payment')
@ApiTags('payment')
export class PaymentController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route will insert payment',
    type: ActionDto,
  })
  insert(@Body() dto: InsertPaymentRequestDto, @GetProfile() user: User) {
    return this.commandBus.execute(new InsertPaymentCommand(dto, user));
  }

  @Get('users')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil return  payment ',
    type: GetUsersPaymentsResponseDto,
  })
  users(@Query() filter: PagingDto, @GetProfile() user: User) {
    return this.queryBus.execute(new GetUsersPaymentsQuery(filter, user));
  }

  @Get('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil return  payment ',
    type: GetUsersPaymentsResponseDto,
  })
  payments(@Query() filter: PagingDto) {
    return this.queryBus.execute(new GetPaymentsQuery(filter));
  }
}
