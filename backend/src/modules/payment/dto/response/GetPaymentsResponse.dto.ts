import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetPaymentResponseList {
  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  order: string;

  @ApiProperty()
  paymentCode: string;

  @ApiProperty({ type: Number })
  payedPrice: number;

  @ApiProperty({ type: String })
  user: string;
}
export class GetPaymentResponseData {
  @ApiProperty({ type: GetPaymentResponseList, isArray: true })
  payments: Array<GetPaymentResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}

export class GetPaymentResponseDto extends ResponseDto {
  @ApiProperty({ type: GetPaymentResponseData })
  data?: GetPaymentResponseData;
}
