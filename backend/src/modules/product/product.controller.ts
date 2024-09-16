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
import { ActionDto } from 'src/shareDTO/action.dto';
import { InsertProductCommand } from './handlers/commands/InsertProduct.command';
import { UpsertProductInfoRequestDto } from './dto/request/UpsertProductRequest.dto';
import { GetProductsRequestRequestDto } from './dto/request/GetProductsRequestRequest.dto';
import { GetProductsQuery } from './handlers/queries/GetProducts.query';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';
import { UpdateProductCommand } from './handlers/commands/UpdateProduct.command';
import { DeleteProductCommand } from './handlers/commands/DeactiveProduct.command';
import { GetProductQuery } from './handlers/queries/GetProduct.query';
import {
  GetProductResponseData,
  GetProductResponseDto,
} from './dto/response/GetProductResponse.dto';
import { GetProductsDto } from './dto/response/GetProductsResponse.dto';

@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route insert new product',
    type: ActionDto,
  })
  insert(@Body() dto: UpsertProductInfoRequestDto) {
    return this.commandBus.execute(new InsertProductCommand(dto));
  }

  @Put(':id')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route update product',
    type: ActionDto,
  })
  update(@Body() dto: UpsertProductInfoRequestDto, @Param('id') id: string) {
    return this.commandBus.execute(new UpdateProductCommand(dto, id));
  }

  @Delete(':id')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route update product',
    type: ActionDto,
  })
  delete(@Param('id') id: string) {
    return this.commandBus.execute(new DeleteProductCommand(id));
  }

  @Get('')
  @ApiOkResponse({
    description: 'this route delete products',
    type: GetProductsDto,
  })
  products(@Query() filter: GetProductsRequestRequestDto) {
    return this.queryBus.execute(new GetProductsQuery(filter));
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'this route get a product',
    type: GetProductResponseDto,
  })
  product(@Param('id') id: string) {
    return this.queryBus.execute(new GetProductQuery(id));
  }
}
