import { ApiProperty } from '@nestjs/swagger';
import {
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
  @Length(10)
  postalCode: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  @Length(2, 100)
  companyName: string;
}
