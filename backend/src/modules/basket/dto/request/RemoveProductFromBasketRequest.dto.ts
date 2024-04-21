import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RemoveProductFromBasketRequestDto {
  @ApiProperty()
  @IsString()
  productId: string;

  @ApiProperty()
  @IsString()
  basketId: string;
}
