import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class InsertReportRequestDto {
  @ApiProperty()
  @IsString()
  @Length(11)
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @Length(3, 100)
  fullName: string;

  @ApiProperty()
  @IsString()
  @Length(1, 1000)
  description: string;
}
