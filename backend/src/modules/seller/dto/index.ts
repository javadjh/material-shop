import { ApiProperty } from '@nestjs/swagger';

export class SellerDto {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  title: string;
}
