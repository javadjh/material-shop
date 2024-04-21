import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
export class OptionDto {
  @ApiProperty()
  @IsString()
  key: string;

  @ApiProperty()
  @IsString()
  value: string;
}

export class CarDto {
  @ApiProperty()
  @IsString()
  carType: string;

  @ApiProperty()
  @IsNumber()
  count: number;
}

export class UpsertProductInfoRequestDto {
  @ApiProperty()
  @IsString()
  @Length(2, 200)
  title: string;

  @ApiProperty()
  @IsNumber()
  code: number;

  @ApiProperty()
  @IsString()
  @Length(5, 200)
  image: string;

  @ApiProperty()
  @IsString()
  @Length(10, 8000)
  description: string;

  @ApiProperty()
  @IsArray()
  tags: Array<string>;

  @ApiProperty()
  @IsNumber()
  minOrderCountForRetail: number;

  @ApiProperty()
  @IsNumber()
  minOrderCountForWholesale: number;

  @ApiProperty()
  @IsNumber()
  offForWholesalePercent: number;

  @ApiProperty({ isArray: true, type: OptionDto })
  @IsArray()
  options?: Array<OptionDto>;

  @ApiProperty({ isArray: true, type: CarDto })
  @IsArray()
  car?: Array<CarDto>;

  @ApiProperty()
  @IsBoolean()
  isHighConsumption?: boolean;

  @ApiProperty()
  @IsString()
  categoryId?: string;

  @ApiProperty()
  @IsString()
  brandId?: string;

  @ApiProperty()
  @IsArray()
  sellerIds?: Array<string>;

  @ApiProperty()
  @IsArray()
  colors: Array<string>;

  @ApiProperty()
  @IsNumber()
  postPrice: number;

  @ApiProperty()
  @IsString()
  unit: string;

  @ApiProperty()
  @IsString()
  size: string;

  @ApiProperty()
  @IsNumber()
  packCount: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  remainingCount: number;
}
