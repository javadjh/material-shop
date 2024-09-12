import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetProfile } from 'src/decorator/get-profile.decorator';
import { User } from 'src/schema/user.schema';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertOrderCommand } from './handler/command/InsertOrder.command';
import { JwtGuard } from 'src/guards/jwt.guard';
import { GetOrderResponseDto } from './dto/response/GetOrdersResponse.dto';
import { GetUsersOrderResponseDto } from './dto/response/GetUsersOrderResponse.dto';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetUsersOrdersQuery } from './handler/query/GetUserOrders.query';
import { GetOrdersQuery } from './handler/query/GetOrders.query';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';

@Controller('order')
@ApiTags('order')
export class OrderController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route will insert order',
    type: ActionDto,
  })
  insert(@GetProfile() user: User) {
    return this.commandBus.execute(new InsertOrderCommand(user));
  }

  @Get('users')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil return  order ',
    type: GetUsersOrderResponseDto,
  })
  users(@Query() filter: PagingDto, @GetProfile() user: User) {
    return this.queryBus.execute(new GetUsersOrdersQuery(filter, user));
  }

  @Get('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil return  order ',
    type: GetUsersOrderResponseDto,
  })
  orders(@Query() filter: PagingDto, @GetProfile() user: User) {
    return this.queryBus.execute(new GetOrdersQuery(filter));
  }
}
