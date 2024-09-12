import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
import { OrderListEnum } from '../share';
export class GetUsersOrderResponseList {
  @ApiProperty()
  totalPrice: number;

  @ApiProperty({ type: Boolean })
  isPayed: boolean;

  @ApiProperty({ type: String })
  createdAt: string;

  @ApiProperty({ type: OrderListEnum, isArray: true })
  orderList: Array<OrderListEnum | any>;
}
export class GetUsersOrderResponseData {
  @ApiProperty({ type: GetUsersOrderResponseList, isArray: true })
  orders: Array<GetUsersOrderResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}

export class GetUsersOrderResponseDto extends ResponseDto {
  @ApiProperty({ type: GetUsersOrderResponseData })
  data?: GetUsersOrderResponseData;
}
