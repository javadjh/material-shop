import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class InsertInquiryRequestDto {
  @ApiProperty()
  @IsString()
  @MinLength(4)
  fullName?: string;

  @ApiProperty()
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  phoneNumber?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  file?: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  items?: string;
}
