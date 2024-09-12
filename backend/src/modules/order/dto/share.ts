import { ApiProperty } from '@nestjs/swagger';

export class OrderListEnum {
  @ApiProperty()
  product?: any;

  @ApiProperty({ type: Number })
  count?: number;

  @ApiProperty({ type: Number })
  price?: number;
}
