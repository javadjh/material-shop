import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from 'src/config/response';
export class GetJobsResponseData {
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
  LastCompanyName: string;

  @ApiProperty()
  LastCompanyTel: string;

  @ApiProperty()
  resume: string;

  @ApiProperty()
  description: string;
}

export class GetJobsResponseDto extends ResponseDto {
  @ApiProperty({ type: GetJobsResponseData, isArray: true })
  data?: Array<GetJobsResponseData | any>;
}
