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
import { UpsertSellerRequestDto } from './dto/request/UpsertSellerRequest.dto';
import { InsertSellerCommand } from './handlers/commands/InsertSeller.command';
import { UpdateSellerCommand } from './handlers/commands/UpdateSeller.command';
import { DeleteSellerCommand } from './handlers/commands/DeleteSeller.command';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetSellersQuery } from './handlers/queries/GetSellers.query';
import { GetSellersResponseDto } from './dto/response/GetSellersResponse.dto';
import { GetSellersRequestDto } from './dto/request/GetSellersRequest.dto';

@Controller('seller')
@ApiTags('seller')
export class SellerController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil insert seller',
    type: ActionDto,
  })
  insert(@Body() dto: UpsertSellerRequestDto) {
    return this.commandBus.execute(new InsertSellerCommand(dto));
  }

  @Put(':id')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil update seller',
    type: ActionDto,
  })
  update(@Body() dto: UpsertSellerRequestDto, @Param('id') id: string) {
    return this.commandBus.execute(new UpdateSellerCommand(dto, id));
  }

  @Delete(':id')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil update seller',
    type: ActionDto,
  })
  delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteSellerCommand(id));
  }

  @Get()
  @ApiOkResponse({
    description: 'this route wil update seller',
    type: GetSellersResponseDto,
  })
  sellers(@Query() filter: GetSellersRequestDto) {
    return this.queryBus.execute(new GetSellersQuery(filter));
  }
}
