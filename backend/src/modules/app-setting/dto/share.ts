import { ApiProperty } from '@nestjs/swagger';

export class ShareAppSetting {
  @ApiProperty()
  contract?: string;

  @ApiProperty()
  updatedAt?: string;
}
