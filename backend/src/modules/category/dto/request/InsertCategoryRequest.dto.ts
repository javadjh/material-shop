import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class InsertCategoryRequestDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNumber()
  index: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  icon: string;

  @ApiProperty()
  @IsOptional()
  @IsObjectId()
  parentId?: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isHighConsumption?: boolean;
}
