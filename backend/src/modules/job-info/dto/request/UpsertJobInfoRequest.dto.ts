import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { JonInfoDepartmentEnum, genderEnum } from 'src/shareDTO/enums';

export class UpsertJobInfoRequestDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  department: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  remainingEmployeeCount: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @IsEnum(genderEnum)
  gender: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  city: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  location: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  ageRange: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  minDegree: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  requiredDegree: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  jobHistory: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  clock: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  salary: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  mission: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
}
