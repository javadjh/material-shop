import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetJobInfoResponseData {
  @ApiProperty()
  department: string;

  @ApiProperty()
  remainingEmployeeCount: number;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  ageRange: string;

  @ApiProperty()
  minDegree: string;

  @ApiProperty()
  requiredDegree: string;

  @ApiProperty()
  jobHistory: string;

  @ApiProperty()
  clock: string;

  @ApiProperty()
  salary: string;

  @ApiProperty()
  mission: string;

  @ApiProperty()
  description: string;
}
export class GetJobInfoResponseDto extends ResponseDto {
  @ApiProperty({ type: GetJobInfoResponseData })
  data?: GetJobInfoResponseData | any;
}
