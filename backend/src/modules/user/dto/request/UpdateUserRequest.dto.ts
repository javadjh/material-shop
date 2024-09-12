import { ApiProperty } from '@nestjs/swagger';
import {
  isEmail,
  IsEmail,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class UpdateUserRequestDto {
  @IsString()
  @IsOptional()
  @ApiProperty()
  @Length(2, 60)
  firstName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Length(2, 60)
  lastName: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  city: number;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Length(8, 500)
  address: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  postalCode: string;

  @IsString()
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Length(2, 100)
  companyName: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  melliCode: string;
}
