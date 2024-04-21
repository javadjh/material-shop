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
  @Length(1, 100)
  fatherName: string;

  @ApiProperty()
  @IsString()
  age: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  bithday: string;

  @ApiProperty()
  @IsBoolean()
  isMarried: string;

  @ApiProperty()
  @IsString()
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
  @Length(1, 100)
  degree: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  universityName: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  jobHistory: string;

  @ApiProperty()
  @IsString()
  @Length(1, 100)
  LastCompanyName: string;

  @ApiProperty()
  @IsString()
  @Length(11)
  @IsOptional()
  LastCompanyTel: string;

  @ApiProperty()
  @IsString()
  resume: string;

  @ApiProperty()
  @IsString()
  @Length(1, 1000)
  description: string;
}
