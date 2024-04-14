import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class GetCategoriesRequestDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsObjectId()
  parentId?: string;
}
