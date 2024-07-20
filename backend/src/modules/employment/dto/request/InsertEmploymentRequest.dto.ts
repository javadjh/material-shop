import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { activityEmploymentEnum } from 'src/shareDTO/enums';

export class InsertEmploymentRequestDto {
  @ApiProperty()
  @IsString()
  @MaxLength(50)
  @MinLength(5)
  fullName: string;

  @ApiProperty()
  @IsString()
  @Length(11)
  phoneNumber: string;

  @ApiProperty()
  @IsNumber()
  cityId: string;

  @ApiProperty()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  @IsEnum(activityEmploymentEnum)
  activity: string;
}
