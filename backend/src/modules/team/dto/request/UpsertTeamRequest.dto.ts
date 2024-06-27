import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpsertTeamRequestDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  fullName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  instagram: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telegram: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  twitter: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  whatsapp: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  linkedin: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  position: string;
}
