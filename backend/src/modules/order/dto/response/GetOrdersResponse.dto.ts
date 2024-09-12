import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
import { OrderListEnum } from '../share';
export class GetOrderResponseList {
  @ApiProperty()
  totalPrice: number;

  @ApiProperty({ type: Boolean })
  isPayed: boolean;

  @ApiProperty({ type: String })
  createdAt: string;

  @ApiProperty({ type: String })
  user: string;

  @ApiProperty({ type: OrderListEnum, isArray: true })
  orderList: Array<OrderListEnum | any>;
}
export class GetOrderResponseData {
  @ApiProperty({ type: GetOrderResponseList, isArray: true })
  orders: Array<GetOrderResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}

export class GetOrderResponseDto extends ResponseDto {
  @ApiProperty({ type: GetOrderResponseData })
  data?: GetOrderResponseData;
}
