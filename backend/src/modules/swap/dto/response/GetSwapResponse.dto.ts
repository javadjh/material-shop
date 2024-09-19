import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';

export class GetSwapResponseList {
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
  items?: string;
}

export class GetSwapResponseData {
  @ApiProperty({ isArray: true, type: GetSwapResponseList })
  list?: Array<GetSwapResponseList | any>;

  @ApiProperty({ type: Number })
  total: number;
}

export class GetSwapResponseDto extends ResponseDto {
  @ApiProperty({ type: GetSwapResponseData })
  data?: GetSwapResponseData;
}
