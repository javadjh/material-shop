import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetUsersPaymentsResponseList {
  @ApiProperty()
  createdAt: string;

  @ApiProperty()
  order: string;

  @ApiProperty()
  paymentCode: string;

  @ApiProperty({ type: Number })
  payedPrice: number;
}
export class GetUsersPaymentsResponseData {
  @ApiProperty({ type: GetUsersPaymentsResponseList, isArray: true })
  payments: Array<GetUsersPaymentsResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}
export class GetUsersPaymentsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetUsersPaymentsResponseData })
  data?: GetUsersPaymentsResponseData;
}
