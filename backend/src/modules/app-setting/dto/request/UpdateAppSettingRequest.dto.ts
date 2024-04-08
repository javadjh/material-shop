import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class UpdateAppSettingRequestDto {
  @IsString()
  @MinLength(10)
  @ApiProperty()
  contract: string;
}
