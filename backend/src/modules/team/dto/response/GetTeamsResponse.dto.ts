import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ResponseDto } from 'src/config/response';

export class GetTeamsResponseData {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  instagram: string;

  @ApiProperty()
  telegram: string;

  @ApiProperty()
  twitter: string;

  @ApiProperty()
  whatsapp: string;

  @ApiProperty()
  linkedin: string;

  @ApiProperty()
  position: string;
}
export class GetTeamsResponseDto extends ResponseDto {
  @ApiProperty({ isArray: true, type: GetTeamsResponseData })
  data?: Array<GetTeamsResponseData | any>;
}
