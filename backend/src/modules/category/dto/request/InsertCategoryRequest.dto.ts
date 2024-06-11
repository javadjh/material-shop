import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class InsertCategoryRequestDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  icon: string;

  @ApiProperty()
  @IsOptional()
  @IsObjectId()
  parentId?: string;
}
