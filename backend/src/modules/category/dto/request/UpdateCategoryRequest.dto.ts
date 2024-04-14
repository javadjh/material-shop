import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateCategoryRequestDto {
  @ApiProperty()
  @IsString()
  title: string;
}
