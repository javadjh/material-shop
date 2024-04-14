import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { SellerDepartmentEnum } from 'src/shareDTO/enums';

export class UpsertSellerRequestDto {
  @IsString()
  @Length(2, 100)
  @ApiProperty()
  title?: string;

  @IsString()
  @Length(11)
  @ApiProperty()
  firstNumber?: string;

  @IsString()
  @Length(11)
  @ApiProperty()
  secondNumber?: string;

  @IsString()
  @Length(10, 500)
  @ApiProperty()
  address?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  website?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  instagram?: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  telegram?: string;

  @IsNumber()
  @ApiProperty()
  cityId?: number;

  @IsString()
  @ApiProperty()
  @IsEnum(SellerDepartmentEnum)
  sellerDepartment?: string;
}
