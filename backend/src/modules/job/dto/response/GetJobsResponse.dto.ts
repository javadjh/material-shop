import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetJobsResponseList {
  @ApiProperty()
  department: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty()
  mellicode: string;

  @ApiProperty()
  fatherName: string;

  @ApiProperty()
  age: string;

  @ApiProperty()
  bithday: string;

  @ApiProperty()
  isMarried: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  firstNumber: string;

  @ApiProperty()
  secondNumber: string;

  @ApiProperty()
  degree: string;

  @ApiProperty()
  universityName: string;

  @ApiProperty()
  jobHistory: string;

  @ApiProperty()
  lastCompanyName: string;

  @ApiProperty()
  lastCompanyTel: string;

  @ApiProperty()
  resume: string;

  @ApiProperty()
  description: string;
}
export class GetJobsResponseData {
  @ApiProperty()
  total?: number;

  @ApiProperty({ type: GetJobsResponseList, isArray: true })
  jobs?: Array<GetJobsResponseList | any>;
}
export class GetJobsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetJobsResponseData })
  data?: GetJobsResponseData;
}
