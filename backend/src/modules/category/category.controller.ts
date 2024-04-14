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
import { InsertCategoryRequestDto } from './dto/request/InsertCategoryRequest.dto';
import { InsertCategoryCommannd } from './handlers/commands/InsertCategory.commannd';
import { UpdateCategoryRequestDto } from './dto/request/UpdateCategoryRequest.dto';
import { UpdateCategoryCommand } from './handlers/commands/UpdateCategory.command';
import { GetCategoriesResponseDto } from './dto/response/GetCategoriesResponse.dto';
import { GetCategoriesQuery } from './handlers/queries/GetCategories.query';
import { GetCategoriesRequestDto } from './dto/request/GetCategoriesRequest.dto';
import { DeleteCategoryCommand } from './handlers/commands/DeleteCategory.command';
import { AdminJwtGuard } from 'src/guards/admin-jwt.guard';

@Controller('category')
@ApiTags('category')
export class CategoryController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post('')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil insert category',
    type: ActionDto,
  })
  insert(@Body() dto: InsertCategoryRequestDto) {
    return this.commandBus.execute(new InsertCategoryCommannd(dto));
  }

  @Put(':id')
  @UseGuards(AdminJwtGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOkResponse({
    description: 'this route wil update category',
    type: ActionDto,
  })
  update(
    @Body() dto: UpdateCategoryRequestDto,
    @Param('id') categoryId: string,
  ) {
    return this.commandBus.execute(new UpdateCategoryCommand(dto, categoryId));
  }

  @Get('')
  @ApiOkResponse({
    description: 'this route wil return  categories',
    type: GetCategoriesResponseDto,
  })
  categories(@Query() dto: GetCategoriesRequestDto) {
    return this.queryBus.execute(new GetCategoriesQuery(dto));
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'this route wil delete category',
    type: ActionDto,
  })
  delete(@Param('id') categoryId: string) {
    return this.commandBus.execute(new DeleteCategoryCommand(categoryId));
  }
}
