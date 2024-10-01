import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetProvideMaterialResponseList {
  @ApiProperty()
  fullName?: string;

  @ApiProperty()
  phoneNumber?: string;

  @ApiProperty()
  cityName?: string;

  @ApiProperty()
  provinceName?: string;

  @ApiProperty()
  file?: string;

  @ApiProperty()
  description?: string;
}

export class GetProvideMaterialResponseData {
  @ApiProperty({ isArray: true, type: GetProvideMaterialResponseList })
  list?: Array<GetProvideMaterialResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}

export class GetProvideMaterialResponseDto extends ResponseDto {
  @ApiProperty({ type: GetProvideMaterialResponseData })
  data?: GetProvideMaterialResponseData;
}
