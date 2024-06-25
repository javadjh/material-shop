import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Length, MinLength } from 'class-validator';

export class RegisterStepTwoRequestDto {
  @IsString()
  @Length(11)
  @ApiProperty()
  phone: string;

  @IsNumber()
  @ApiProperty()
  code: number;
}
