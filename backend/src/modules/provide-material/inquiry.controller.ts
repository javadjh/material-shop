import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertProvideMaterialRequestDto } from './dto/request/InsertProvideMaterialRequest.dto';
import { InsertProvideMaterialCommand } from './handlers/command/InsertProvideMaterial.command';
import { GetProvideMaterialsQuery } from './handlers/query/GetProvideMaterials.query';
import { PagingDto } from 'src/shareDTO/Paging.dto';
import { GetProvideMaterialResponseDto } from './dto/response/GetProvideMaterialResponse.dto';

@Controller('provideMaterial')
@ApiTags('provideMaterial')
export class ProvideMaterialController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @ApiOkResponse({
    description: 'this route for insert new provideMaterial',
    type: ActionDto,
  })
  insert(@Body() dto: InsertProvideMaterialRequestDto) {
    return this.commandBus.execute(new InsertProvideMaterialCommand(dto));
  }

  @Get('')
  @ApiBearerAuth('JWT-auth')
  @UseGuards(AdminJwtGuard)
  @ApiOkResponse({
    description: 'this route for return provideMaterials',
    type: GetProvideMaterialResponseDto,
  })
  provideMaterials(@Param() filter: PagingDto) {
    return this.queryBus.execute(new GetProvideMaterialsQuery(filter));
  }
}
