import { ResponseDto } from 'src/config/response';
import { ShareProvince } from '../share';
import { ApiProperty } from '@nestjs/swagger';
export class GetProvincesData {
  @ApiProperty({ type: ShareProvince, isArray: true })
  list?: Array<ShareProvince>;
}
export class GetProvincesDto extends ResponseDto {
  @ApiProperty({ type: GetProvincesData })
  data?: GetProvincesData;
}
