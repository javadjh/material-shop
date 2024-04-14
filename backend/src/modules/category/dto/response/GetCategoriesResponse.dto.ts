import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
import { BaseCategoryDto } from '../share';
export class GetCategoriesResponseData {
  @ApiProperty({ type: BaseCategoryDto, isArray: true })
  list: Array<BaseCategoryDto | any>;
}
export class GetCategoriesResponseDto extends ResponseDto {
  @ApiProperty({ type: GetCategoriesResponseData })
  data?: GetCategoriesResponseData;
}
