import { ResponseDto } from 'src/config/response';
import { ApiProperty } from '@nestjs/swagger';
export class GetProductsList {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  image: string;

  @ApiProperty({ type: Number })
  price: number;

  @ApiProperty({ type: Number })
  remainingCount: number;

  @ApiProperty()
  brandName: string;
}
export class GetProductsData {
  @ApiProperty({ type: GetProductsList, isArray: true })
  list: Array<GetProductsList | any>;

  @ApiProperty({ type: Number })
  total: number;

  @ApiProperty({ type: Number })
  maxPrice: number;

  @ApiProperty({ type: Number })
  minPrice: number;
}
export class GetProductsDto extends ResponseDto {
  @ApiProperty({ type: GetProductsData })
  data?: GetProductsData | any;
}
