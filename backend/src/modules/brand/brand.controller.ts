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

import { PagingDto } from 'src/shareDTO/Paging.dto';
import { UpsertBrandRequestDto } from './dto/request/UpsertBrandRequest.dto';
import { InsertBrandCommand } from './handlers/commands/InsertBrand.command';
import { UpdateBrandCommand } from './handlers/commands/UpdateBrand.command';
import { GetBrandsResponseDto } from './dto/response/GetBrandResponse.dto';
import { GetBrandsQuery } from './handlers/queries/GetBrands.query';

@Controller('brand')
@ApiTags('brand')
export class BrandController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil insert brand',
    type: ActionDto,
  })
  insert(@Body() dto: UpsertBrandRequestDto) {
    return this.commandBus.execute(new InsertBrandCommand(dto));
  }

  @Put(':id')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil insert brand',
    type: ActionDto,
  })
  update(@Body() dto: UpsertBrandRequestDto, @Param('id') id: string) {
    return this.commandBus.execute(new UpdateBrandCommand(dto, id));
  }

  @Get('')
  @ApiOkResponse({
    description: 'this route wil return brands ',
    type: GetBrandsResponseDto,
  })
  jonInfoDepartments() {
    return this.queryBus.execute(new GetBrandsQuery());
  }
}
