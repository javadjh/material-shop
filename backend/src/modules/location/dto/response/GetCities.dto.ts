import { ResponseDto } from 'src/config/response';
import { ShareCity } from '../share';
import { ApiProperty } from '@nestjs/swagger';
export class GetCitiesData {
  @ApiProperty({ type: ShareCity, isArray: true })
  list?: Array<ShareCity>;
}
export class GetCitiesDto extends ResponseDto {
  @ApiProperty({ type: GetCitiesData })
  data?: GetCitiesData;
}
