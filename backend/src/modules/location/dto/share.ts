import { ApiProperty } from '@nestjs/swagger';

export class ShareProvince {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  slug?: string;

  @ApiProperty({ type: Number })
  id?: number;
}
export class ShareCity {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  slug?: string;

  @ApiProperty({ type: Number })
  id?: number;

  @ApiProperty({ type: Number })
  province_id?: number;
}
