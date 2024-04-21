import { ResponseDto } from 'src/config/response';
import { ApiProperty } from '@nestjs/swagger';
import { CarDto, OptionDto } from '../request/UpsertProductRequest.dto';
import { SellerDto } from 'src/modules/seller/dto';

export class GetProductResponseData {
  @ApiProperty()
  title: string;

  @ApiProperty()
  code: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ isArray: true })
  tags: Array<string>;

  @ApiProperty()
  minOrderCountForRetail: number;

  @ApiProperty()
  minOrderCountForWholesale: number;

  @ApiProperty()
  offForWholesalePercent: number;

  @ApiProperty({ isArray: true, type: OptionDto })
  options: Array<OptionDto>;

  @ApiProperty()
  categoryName: string;

  @ApiProperty()
  colors: Array<string>;

  @ApiProperty({ isArray: true, type: SellerDto })
  sellers: Array<SellerDto>;

  @ApiProperty()
  brandName: string;

  @ApiProperty()
  postPrice: number;

  @ApiProperty()
  unit: string;

  @ApiProperty()
  size: number;

  @ApiProperty()
  packCount: number;

  @ApiProperty({ type: CarDto, isArray: true })
  car: Array<CarDto>;

  @ApiProperty()
  price: number;

  @ApiProperty()
  remainingCount: number;
}

export class GetProductResponseDto extends ResponseDto {
  @ApiProperty({ type: GetProductResponseData })
  data?: GetProductResponseData | any;
}
