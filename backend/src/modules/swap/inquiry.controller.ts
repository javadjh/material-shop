import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertSwapRequestDto } from './dto/request/InsertSwapRequest.dto';
import { InsertSwapCommand } from './handlers/command/InsertSwap.command';
import { GetSwapsQuery } from './handlers/query/GetSwaps.query';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetSwapResponseDto } from './dto/response/GetSwapResponse.dto';

@Controller('swap')
@ApiTags('swap')
export class SwapController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOkResponse({
    description: 'this route for insert new swap',
    type: ActionDto,
  })
  insert(@Body() dto: InsertSwapRequestDto) {
    return this.commandBus.execute(new InsertSwapCommand(dto));
  }

  @Get('')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminJwtGuard)
  @ApiOkResponse({
    description: 'this route for return swaps',
    type: GetSwapResponseDto,
  })
  swaps(@Param() filter: PagingDto) {
    return this.queryBus.execute(new GetSwapsQuery(filter));
  }
}
