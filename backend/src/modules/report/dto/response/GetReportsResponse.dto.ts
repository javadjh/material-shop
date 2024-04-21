import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetReportsResponseData {
  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  description: string;
}

export class GetReportsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetReportsResponseData, isArray: true })
  data?: Array<GetReportsResponseData | any>;
}
