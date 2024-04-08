import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class LoginRequestDto {
  @IsString()
  @IsEmail()
  @ApiProperty()
  email?: string;

  @IsString()
  @ApiProperty()
  @Length(6, 32)
  password?: string;
}
