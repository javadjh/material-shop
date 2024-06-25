import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length, MinLength } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  @Length(11)
  @ApiProperty()
  phone: string;
}
