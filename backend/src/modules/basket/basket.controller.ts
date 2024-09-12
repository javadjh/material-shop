import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginJwtGuard } from 'src/guards/login-jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { ProductToBasketRequestDto } from './dto/request/ProductToBasketRequest.dto';
import { ProductToBasketCommand } from './handlers/commands/ProductToBasket.command';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetUsersBasketQuery } from './handlers/queries/GetUsersBasket.query';
import { GetProfile } from 'src/decorator/get-profile.decorator';
import { User } from 'src/schema/user.schema';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RemoveProductFromBasketCommand } from './handlers/commands/RemoveProductFromBasket.command';
import { RemoveProductFromBasketRequestDto } from './dto/request/RemoveProductFromBasketRequest.dto';

@Controller('basket')
@ApiTags('basket')
export class BasketController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route will add product to basket',
    type: ActionDto,
  })
  insert(@Body() dto: ProductToBasketRequestDto, @GetProfile() user: User) {
    return this.commandBus.execute(new ProductToBasketCommand(dto, user));
  }

  @Delete('')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route will add product to basket',
    type: ActionDto,
  })
  delete(@Query() dto: RemoveProductFromBasketRequestDto) {
    return this.commandBus.execute(new RemoveProductFromBasketCommand(dto));
  }

  @Get('')
  @UseGuards(JwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route will add product to basket',
    type: ActionDto,
  })
  baskets(@GetProfile() user: User) {
    return this.queryBus.execute(new GetUsersBasketQuery(user));
  }
}
