import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNumber, IsString, Length } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id';

export class RegisterStepThreeRequestDto {
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  @Length(2, 60)
  firstName: string;

  @IsString()
  @ApiProperty()
  @Length(2, 60)
  lastName: string;

  @IsString()
  @ApiProperty()
  @Length(10)
  melliCode: string;

  @IsNumber()
  @ApiProperty()
  city: number;

  @IsString()
  @ApiProperty()
  @Length(8, 500)
  address: string;

  @IsString()
  @ApiProperty()
  @Length(10)
  postalCode: string;

  @IsString()
  @ApiProperty()
  @Length(2, 100)
  companyName: string;
}
