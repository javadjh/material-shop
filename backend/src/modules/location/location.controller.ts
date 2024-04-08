import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ActionDto } from 'src/shareDTO/action.dto';
import { SeedingLocationsDataCommand } from './handlers/commands/SeedingLocationsData.command';
import { GetProvincesQuery } from './handlers/queries/GetProvinces.query';
import { GetProvincesDto } from './dto/response/GetProvinces.dto';
import { GetCitiesQuery } from './handlers/queries/GetCities.query';
@Controller('location')
@ApiTags('location')
export class LocationController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('seed')
  @ApiOkResponse({
    description: 'this route seed the locations data (cities and province) ',
    type: ActionDto,
  })
  seed() {
    return this.commandBus.execute(new SeedingLocationsDataCommand());
  }

  @Get('provinces')
  @ApiOkResponse({
    description: 'this route return the list of provinces',
    type: GetProvincesDto,
  })
  provinces() {
    return this.queryBus.execute(new GetProvincesQuery());
  }

  @Get('cities/:provinceId')
  @ApiOkResponse({
    description: 'this route return the list of cities of single provinnce',
    type: GetProvincesDto,
  })
  cities(@Param('provinceId', ParseIntPipe) provinceId: number) {
    return this.queryBus.execute(new GetCitiesQuery(provinceId));
  }
}
