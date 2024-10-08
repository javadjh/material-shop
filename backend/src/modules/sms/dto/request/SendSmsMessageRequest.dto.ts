import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class SendSmsMessageRequestDto {
  @ApiProperty()
  @IsString()
  userId: string;

  @ApiProperty()
  @IsString()
  message: string;
}
