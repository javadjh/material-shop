import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetSellersResponseList {
  @ApiProperty()
  firstNumber: string;

  @ApiProperty()
  secondNumber: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  province: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  website: string;

  @ApiProperty()
  instagram: string;

  @ApiProperty()
  telegram: string;

  @ApiProperty()
  sellerDepartment: string;
}
export class GetSellersResponseData {
  @ApiProperty()
  total?: number;

  @ApiProperty({ type: GetSellersResponseList, isArray: true })
  sellers?: Array<GetSellersResponseList | any>;
}
export class GetSellersResponseDto extends ResponseDto {
  @ApiProperty({ type: GetSellersResponseData, isArray: true })
  data?: Array<GetSellersResponseData | any>;
}
