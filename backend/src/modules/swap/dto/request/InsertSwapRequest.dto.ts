import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class InsertSwapRequestDto {
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
  @IsNumber()
  cityId?: number;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  description?: string;
}
