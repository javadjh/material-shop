import { ApiProperty } from '@nestjs/swagger';

export class ShareAppSetting {
  @ApiProperty()
  instagram: string;

  @ApiProperty()
  twitter: string;

  @ApiProperty()
  whatsapp: string;

  @ApiProperty()
  pinterest: string;

  @ApiProperty()
  linkedin: string;

  @ApiProperty()
  telegram: string;

  @ApiProperty()
  youtube: string;

  @ApiProperty()
  bazazr: string;

  @ApiProperty()
  myket: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  sibche: string;

  @ApiProperty()
  sibapp: string;

  @ApiProperty()
  webapp: string;

  @ApiProperty()
  banner: string;

  @ApiProperty()
  updatedAt?: string;
}
