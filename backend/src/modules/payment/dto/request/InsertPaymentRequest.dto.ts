import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class InsertPaymentRequestDto {
  @ApiProperty()
  @IsString()
  orderId: string;

  @ApiProperty()
  @IsString()
  paymentCode: string;

  @ApiProperty()
  @IsNumber()
  payedPrice: number;
}
