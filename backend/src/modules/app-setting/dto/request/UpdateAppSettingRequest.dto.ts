import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateAppSettingRequestDto {
  @IsOptional()
  @IsString()
  @ApiProperty()
  instagram: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  twitter: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  whatsapp: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  pinterest: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  linkedin: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  telegram: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  youtube: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  bazazr: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  myket: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  link: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  sibche: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  sibapp: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  webapp: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  banner: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  firstAddress?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  secondAddress?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  thirdAddress?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  firstTell?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  secondTell?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  thirdTell?: string;
}
