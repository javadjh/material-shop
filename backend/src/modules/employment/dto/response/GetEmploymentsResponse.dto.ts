import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetEmploymentsResponseList {
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  cityId: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  activity: string;
}
export class GetEmploymentsResponseData {
  @ApiProperty()
  total: number;

  @ApiProperty({ type: GetEmploymentsResponseList, isArray: true })
  employments: Array<GetEmploymentsResponseList | any>;
}

export class GetEmploymentsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetEmploymentsResponseData })
  data?: GetEmploymentsResponseData;
}
