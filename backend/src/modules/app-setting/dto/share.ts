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
  location: string;

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
  bannerLink: string;

  @ApiProperty()
  updatedAt?: string;

  @ApiProperty()
  firstAddress?: string;

  @ApiProperty()
  secondAddress?: string;

  @ApiProperty()
  thirdAddress?: string;

  @ApiProperty()
  firstTell?: string;

  @ApiProperty()
  secondTell?: string;

  @ApiProperty()
  thirdTell?: string;
}
