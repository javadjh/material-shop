import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetReportsResponseList {
  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  description: string;
}
export class GetReportsResponseData {
  @ApiProperty()
  total: number;

  @ApiProperty({ type: GetReportsResponseList, isArray: true })
  reports: Array<GetReportsResponseList | any>;
}

export class GetReportsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetReportsResponseData })
  data?: GetReportsResponseData;
}
