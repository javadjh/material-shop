import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';

export class InsertJobRequestDto {
  @ApiProperty()
  @IsString()
  @Length(1, 100)
  department: string;

  @ApiProperty()
  @IsString()
  @Length(3, 100)
  fullName: string;

  @ApiProperty()
  @IsString()
  @Length(10)
  mellicode: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 100)
  fatherName: string;

  @ApiProperty()
  @IsString()
  age: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  @IsOptional()
  bithday: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isMarried: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 500)
  address: string;

  @ApiProperty()
  @IsString()
  @Length(10)
  firstNumber: string;

  @ApiProperty()
  @IsString()
  @Length(10)
  @IsOptional()
  secondNumber: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 100)
  degree: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  @IsOptional()
  universityName: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 100)
  jobHistory: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 100)
  lastCompanyName: string;

  @ApiProperty()
  @IsString()
  @Length(11)
  @IsOptional()
  lastCompanyTel: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  resume: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 1000)
  description: string;
}
