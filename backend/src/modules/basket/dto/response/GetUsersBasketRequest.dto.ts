import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
import { GetProductsList } from 'src/modules/product/dto/response/GetProductsResponse.dto';
export class GetUsersBasketReuestData extends GetProductsList {
  @ApiProperty({ type: Number })
  count: number;
}
export class GetUsersBasketReuestDto extends ResponseDto {
  @ApiProperty({ type: GetUsersBasketReuestData, isArray: true })
  data?: Array<GetUsersBasketReuestData>;
}
